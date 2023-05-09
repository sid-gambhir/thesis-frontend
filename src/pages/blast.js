import Layout from "../components/layout";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import ResultTable from "./resultTable";
import { appConfig } from "../config";
import { exportToExcel } from "react-json-to-excel";
import BlastResultTable from "./blastResultTable";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Blast() {
  const [geneMetadata, setGeneMetadata] = useState({});
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedBiologicalFunction, setSelectedBiologicalFunction] =
    useState("");
  const [selectedExperimentalMethod, setSelectedExperimentalMethod] =
    useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [downloadList, setDownloadList] = useState([]);
  var today = new Date();
  const [blastInput, setBlastInput] = useState("");

  function addItemToDownload(dataIdx) {
    setDownloadList((prevState) => [...prevState, searchResults[dataIdx]]);
  }
  function removeItemFromDownload(dataIdx) {
    const tempList = downloadList.filter(
      (itemToRemove) => itemToRemove !== searchResults[dataIdx]
    );
    setDownloadList(tempList);
  }
  useEffect(() => {
    console.log("Download List: ", downloadList);
  }, [downloadList]);

  function downloadSelectedRows() {
    if (downloadList.length > 0) {
      exportToExcel(
        downloadList,
        "list-of-millets_" + today.toLocaleDateString("en-GB")
      );
      alert("Downloaded selected rows!");
    } else {
      alert("Selected rows to download");
    }
  }

  useEffect(() => {
    axios
      .get(`${appConfig.baseUrl}/${appConfig.geneMetadataUri}`)
      .then((response) => {
        setGeneMetadata(response.data);
      });
  }, []);

  const onSearch = () => {
    console.log("input data: ", blastInput);
    
    
    const queryParams = {
      ...(selectedSpecies ? { species: selectedSpecies } : {}),
      ...(selectedBiologicalFunction
        ? { function: selectedBiologicalFunction }
        : {}),
      ...(selectedExperimentalMethod
        ? { experimental_method: selectedExperimentalMethod }
        : {}),
      blastn: blastInput,
    };
    axios
    .get(`${appConfig.baseUrl}/${appConfig.geneListUri}`, {
          params: queryParams,
        }
      )
      .then((response) => {
        console.log("Search response data: ", response.data);
        setSearchResults(response.data);
      });
  };

  return (
    <Layout>
      <div className="bg-gray-100 md:flex md:items-center md:justify-between py-10 px-10 ">
        <div className="flex-1 min-w-0">
          <h2 className="text-4xl font-bold leading-7 text-gray-900  mb-10">
            Browse/BLAST
          </h2>
          {/* <Listbox value={selectedSpecies} onChange={setSelectedSpecies}>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-md font-medium text-gray-700">
                Enter BLAST Sequence
              </Listbox.Label>
              <div className="mt-3 mb-5 relative">
                <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span className="block truncate">
                    {selectedSpecies || "Select"}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  {geneMetadata?.species && (
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {geneMetadata.species.map((speciesName) => (
                        <Listbox.Option
                          key={speciesName}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={speciesName}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {speciesName}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  )}
                </Transition>
              </div>
            </>
          )}
        </Listbox> */}

          {/* <div className=" flex ">
          <button
            onClick={onSearch}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            Search
          </button>
        </div> */}

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700"
            >
              Enter BLAST Sequence
            </label>
            <div className="mt-1 flex">
              <input
                required
                id="mid"
                name="mid"
                type="text"
                value={blastInput}
                onInput={(e) => setBlastInput(e.target.value)}
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-600 rounded-md"
              />
              <button
                type="button"
                onClick={onSearch}
                className="mx-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                Search
              </button>
            </div>
          </div>
          {downloadList.length > 0 && (
            <button
              type="button"
              className="my-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              onClick={() => {
                exportToExcel(
                  downloadList,
                  "list-of-millets_" + today.toLocaleDateString("en-GB")
                );
                alert("Downloaded selected rows!");
              }}
            >
              Download selected rows as Excel
            </button>
          )}

          {searchResults.length > 0 && (
            <button
              type="button"
              className="mx-3 my-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              onClick={() => {
                exportToExcel(
                  searchResults,
                  "list-of-millets_" + today.toLocaleDateString("en-GB")
                );
                alert("Downloaded all rows!");
              }}
            >
              Download all rows as Excel
            </button>
          )}

          {searchResults.length > 0 && (
            <>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700 mt-10"
              >
                Results{": " + searchResults.length}
              </label>
              <BlastResultTable
                dataList={searchResults}
                addItemToDownload={addItemToDownload}
                removeItemFromDownload={removeItemFromDownload}
                downloadList={downloadList}
              />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

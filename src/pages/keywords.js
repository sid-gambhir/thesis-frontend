/* This example requires Tailwind CSS v2.0+ */
import axios from "axios";
import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import ResultTable from './resultTable'
import { appConfig } from "../config";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Keyword() {
  const [geneMetadata, setGeneMetadata] = useState({});
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [selectedBiologicalFunction, setSelectedBiologicalFunction] = useState('');
  const [selectedExperimentalMethod, setSelectedExperimentalMethod] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get(`${appConfig.baseUrl}/${appConfig.geneMetadataUri}`).then((response) => {
      setGeneMetadata(response.data);
    });
  }, []);

  const onSearch = () => {
    const queryParams = {
      ...(selectedSpecies ? { species: selectedSpecies } : {}),
      ...(selectedBiologicalFunction
        ? { function: selectedBiologicalFunction }
        : {}),
      ...(selectedExperimentalMethod
        ? { experimental_method: selectedExperimentalMethod }
        : {}),
    };
    axios
      .get(`${appConfig.baseUrl}/${appConfig.geneListUri}`, {
        params: queryParams,
      })
      .then((response) => {
        console.log(response.data);
        setSearchResults(response.data);
      });
  };

  return (
    <div className="bg-gray-100 md:flex md:items-center md:justify-between py-10 px-10 ">
    
      <div className="flex-1 min-w-0">
      <h2 className="text-4xl font-bold leading-7 text-gray-900  mb-10">Browse/Keywords</h2>
      <Listbox value={selectedSpecies} onChange={setSelectedSpecies}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-md font-medium text-gray-700">Select species</Listbox.Label>
          <div className="mt-3 mb-5 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selectedSpecies || 'Select'}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {geneMetadata?.species && 
              (<Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {geneMetadata.species.map((speciesName) => (
                  <Listbox.Option
                    key={speciesName}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={speciesName}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {speciesName}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>)}
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    <Listbox value={selectedBiologicalFunction} onChange={setSelectedBiologicalFunction}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-md font-medium text-gray-700">Select biological function</Listbox.Label>
          <div className="mt-3 mb-5 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selectedBiologicalFunction || 'Select'}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {geneMetadata?.biological_functions &&
              (<Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {geneMetadata?.biological_functions.map((bioFunctionName) => (
                  <Listbox.Option
                    key={bioFunctionName}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={bioFunctionName}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {bioFunctionName}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>)}
            </Transition>
          </div>
        </>
      )}
    </Listbox>

    <Listbox value={selectedExperimentalMethod} onChange={setSelectedExperimentalMethod}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-md font-medium text-gray-700">Select experimental method</Listbox.Label>
          <div className="mt-3 mb-5 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selectedExperimentalMethod || 'Select'}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {geneMetadata?.experimental_methods &&(
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {geneMetadata.experimental_methods.map((expMethod) => (
                  <Listbox.Option
                    key={expMethod}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={expMethod}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {expMethod}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>)}
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    <div className=" flex ">
        <button
          onClick={onSearch}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
        >
          Search
        </button>
        
      </div>
      
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-md font-medium bg-gray-300 text-black mt-5 mb-5">
        OR
      </span>

      <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
              Type Gene Name or Accession ID
              </label>
              <div className="mt-1 flex">
                <input
                required
                  id="gid"
                  name="gid"
                  type="text"
                  
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-600 rounded-md"
                />
                <button
          type="button"
          className="mx-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
        >
          Search
        </button>
              </div>
            </div>

            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-md font-medium bg-gray-300 text-black mt-5 mb-5">
        OR
      </span>

      <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
              Type miRNA ID
              </label>
              <div className="mt-1 flex">
                <input
                required
                  id="mid"
                  name="mid"
                  type="text"
                  
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-600 rounded-md"
                />
                <button
          type="button"
          className="mx-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
        >
          Search
        </button>
              </div>
              
        
            </div>
            {searchResults.length > 0 && (
              <>
              <label htmlFor="email" className="block text-md font-medium text-gray-700 mt-10">
              Results
              </label>
              <ResultTable dataList = {searchResults}/>
              </>
              
            )}
      </div>
      
    </div>
  )
}

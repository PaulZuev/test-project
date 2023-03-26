import React, {FC, memo, useState} from "react";

import { ActionsMenu, FilesItem, MenuButton } from "./Files.styled";
import path from 'path';
import IconDoc from "../../../../public/DOC.svg";
import IconPdf from "../../../../public/PDF.svg";
import IconJpg from "../../../../public/JPG.svg";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery";

interface IFile {
  docName: string;
}

const File: FC<IFile> = ({docName}) => {
  const [state, setState] = useState(false);
  const [stateMenu, setMenu] = useState(false);

  const nameDoc = docName.replace(/^.*[\\\/]/, '');
  const docType = path.extname(nameDoc).slice(1);
  console.log()
  const docs = [
      { 
        uri: docName,
        fileType: docType,
        fileName: nameDoc,
      },
  ];
  

  const logoDoc = () =>{
    if(docType === 'doc' || docType === 'docx'){
      return <IconDoc/>;
    }
    if(docType === 'pdf'){
      return <IconPdf/>;
    }
    if(docType === 'jpg'){
      return <IconJpg/>;
    }
  }
  const isBreakpoint = useMediaQuery(768);

  const toggleClass = () => {
    setMenu(!stateMenu)
  };

  const onDownloadFile = () => {
    fetch(docName).then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = docName;
            alink.click();
        })
    })
  }
  return (
    <FilesItem>
      <div className="flex-container align-items-center overflow">
        <div className="flex-1 texts">
          <div className="flex-container align-items-center all-block-click" onClick={() => setState(!state)}>
            <div className="flex-0">
              <div className="file-icon-container">
                {logoDoc()}
              </div>
            </div>
            <div  className="name text-plain ml-12">
              {nameDoc}
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ml-20">
          {!isBreakpoint ? (
              <div role="button" className="link-plain text-plain block" tabIndex={0} onClick={onDownloadFile}> Скачать </div>
          ) : (
            <div className="actions-menu-container">
              <MenuButton role="button" className="actions-menu-button ml-lg-16" tabIndex={0} onClick={toggleClass}>
                <div className="actions-menu-button-dots"></div>
              </MenuButton>
              {stateMenu && (
                <ActionsMenu className="hide-lg closable active">
                  <ul>
                    <li className="mb-16 block hide-lg">
                      <div role="button" className="link-plain text-plain block" tabIndex={0} onClick={onDownloadFile}> Скачать </div>
                    </li>
                  </ul>
                <div role="button" title="Закрыть" className="close-menu" tabIndex={0} onClick={toggleClass}></div>
                </ActionsMenu>
              )}
              
            </div>
          )}
          </div>
        </div>
      </div>
      {state && (
        <DocViewer 
          documents={docs} 
          pluginRenderers={DocViewerRenderers} 
          config={{
            header: {
              disableHeader: true,
              disableFileName: true,
              retainURLParams: true
            }
          }}
          className="mt-24"
          style={{
            ...((docType === 'doc' || docType === 'docx') && 
              {height: 500}
              
            ),
            maxHeight: 500,
          }}
        />
      )}
    </FilesItem>
  )
};

export default memo(File);

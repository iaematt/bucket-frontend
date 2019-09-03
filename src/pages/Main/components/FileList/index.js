import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files , onDelete }) => (
    <Container>
        {files.map(uploadedFile => (
            <li key={uploadedFile.id}>
                <FileInfo>
                    <Preview src={uploadedFile.preview} />
                    <div>
                        <strong>
                        {   uploadedFile.name.length > 25 ?
                            `${uploadedFile.name.substring(0, 25)}...`
                            : uploadedFile.name
                        }</strong>
                        <span>
                            {uploadedFile.readableSize} 
                            {!!uploadedFile.url && (
                                <button onClick={() => onDelete(uploadedFile.id)}>Excluir</button>
                            )}
                        </span>
                    </div>
                </FileInfo>
                
                <div>
                    {!uploadedFile.uploaded && !uploadedFile.error && (
                        <CircularProgressbar
                            styles={{
                                root: { width: 24, height: 24 },
                                path: { stroke: '#025D8C' }
                            }}
                            strokeWidth={10}
                            value={uploadedFile.progress}
                        />
                    )}
                    
                    {uploadedFile.url && (
                        <a
                            href={`file/${uploadedFile.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                        </a>
                    )}
                    
                    { uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" /> }
                    { uploadedFile.error && <MdError size={24} color="#e57878" /> } 
                </div>
            </li>
        ))}
    </Container>
);

export default FileList;
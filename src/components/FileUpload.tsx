// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import { Dispatch } from 'react';
import { SetStateAction } from 'jotai';


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function FileUpload({ files, setFiles, multiple = false, maxFiles = 5 }: { files: Array<File>, setFiles: Dispatch<SetStateAction<any>>, multiple?: boolean, maxFiles?: number }) {
    return (
        <>
            <FilePond allowMultiple={multiple} files={files} maxFiles={maxFiles} fileSizeBase={10000} onupdatefiles={setFiles} acceptedFileTypes={['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'image/jpeg', 'image/png', 'application/zip']} />
        </>
    )
}
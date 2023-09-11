/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
    forwardRef,
} from 'react';
import { FilePond, type FilePondProps, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilepPondImageTransform from 'filepond-plugin-image-transform';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';
import { type FilePondFile, type FilePondInitialFile } from 'filepond';
import { useBool } from '@/hooks/useBool';
registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginFilePoster,
    FilePondPluginFileValidateType,
    FilePondPluginImageCrop,
    FilepPondImageTransform,
);

type UploaderPropsSingleFile<T> = T &
    Omit<FilePondProps, 'allowMultiple'> & {
        allowMultiple?: false;
        value?: string | null;
        onChange?: (value: string | null) => void;
    };

type UploaderPropsMultipleFile<T> = T &
    Omit<FilePondProps, 'allowMultiple'> & {
        allowMultiple: true;
        value?: string[];
        onChange?: (value: string[]) => void;
    };

export type UploaderProps<T = unknown> =
    | UploaderPropsSingleFile<T>
    | UploaderPropsMultipleFile<T>;

const Uploader = forwardRef<any, UploaderProps>(function Uploader(props, ref) {
    const initialFiles: FilePondInitialFile[] = useMemo(() => {
        const initialFiles: FilePondInitialFile[] = [];

        if (!props.value) return initialFiles;

        if (props.allowMultiple && props.value.length > 0) {
            props.value.forEach((url) =>
                initialFiles.push({
                    source: url,
                    options: {
                        type: 'local',

                        metadata: {
                            poster: url,
                        },
                    },
                }),
            );
            return initialFiles;
        } else if (props.value) {
            initialFiles.push({
                source: props.value as string,
                options: {
                    type: 'local',

                    metadata: {
                        poster: props.value,
                    },
                },
            });
        }

        return initialFiles;
    }, []);

    const [files, setFiles] =
        useState<(FilePondFile | FilePondInitialFile)[]>(initialFiles);

    const isReady = useBool(false);

    const handleUpdate = useCallback(() => {
        if (props.onChange && isReady.value) {
            if (props.allowMultiple === true) {
                props.onChange(
                    files
                        .map((file) => (file as FilePondFile).serverId)
                        .filter((str) => typeof str === 'string'),
                );
            } else {
                props.onChange(
                    files
                        .map((file) => (file as FilePondFile).serverId)
                        .filter((str) => typeof str === 'string')[0] || null,
                );
            }
        }
    }, [props.onChange, props.allowMultiple, isReady.value, files]);

    const handleProcessFile = useCallback(() => {
        isReady.onTrue();
        handleUpdate();
    }, [handleUpdate, isReady]);

    useEffect(() => {
        handleUpdate();
    }, [files, handleUpdate]);

    useEffect(() => {
        const id = setTimeout(isReady.onTrue, 1000);

        return () => {
            clearTimeout(id);
        };
    }, []);

    return (
        <div
            className="w-full"
            css={{
                '& .filepond--file-poster img': {
                    objectFit: 'contain',
                },
                // '& .filepond--panel': {
                //     border: '2px solid lightgray !important',
                //     backgroundColor: '#eaeaea !important',
                // },
                // '& .filepond--panel-top, & .filepond--panel-center, & .filepond--panel-bottom':
                //     {
                //         border: 'none',
                //         backgroundColor: 'transparent !important',
                //     },
            }}
        >
            <FilePond
                filePosterMinHeight={44}
                filePosterMaxHeight={256}
                files={files as unknown as FilePondInitialFile[]}
                onupdatefiles={(files) => {
                    setFiles(files);
                }}
                onprocessfile={handleProcessFile}
                onprocessfilestart={isReady.onFalse}
                allowImagePreview
                allowMultiple={true}
                labelIdle='Перетащите ваши файлы или нажмите <span class="filepond--label-action">Проводник</span>'
                ref={ref}
                {...props}
            />
        </div>
    );
});

export default React.memo(Uploader);

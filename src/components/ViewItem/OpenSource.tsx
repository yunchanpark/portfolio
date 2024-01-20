import React from 'react';

type Contents = {
    libraryName: string;
    state: 'Merge' | 'Open' | 'Comment';

    createdAt: string;
    contents?: {
        text: string;
        link?: string;
    }[];
};

export type OpenSourceProps = {
    contents: Contents[];
};

export default function OpenSource({ contents }: OpenSourceProps) {
    return (
        <div className="mb-8">
            {contents.map(({ state, libraryName, contents, createdAt }) => {
                return (
                    <article key={libraryName + state} aria-label={libraryName} className="mt-8">
                        <h3 className="text-3xl font-bold mb-5">{libraryName}</h3>
                        <div className="flex gap-4 items-center mb-5">
                            {state === 'Merge' ? (
                                <span className="inline-block text-sm px-3 py-1 bg-[#8957e5] text-white rounded-[2rem]">
                                    <svg height="16" width="16" viewBox="0 0 16 16" className="inline-block fill-white">
                                        <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path>
                                    </svg>{' '}
                                    Merged
                                </span>
                            ) : state === 'Open' ? (
                                <span className="inline-block text-sm px-3 py-1 bg-[#238636] text-white rounded-[2rem]">
                                    <svg height="16" width="16" viewBox="0 0 16 16" className="inline-block fill-white">
                                        <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                                    </svg>{' '}
                                    Open
                                </span>
                            ) : (
                                <span className="inline-block text-sm px-3 py-1 bg-[#1F4EF5] text-white rounded-[2rem]">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        className="inline-block fill-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.66666 9.33333H11.3333C11.5222 9.33333 11.6805 9.26944 11.8083 9.14166C11.9361 9.01389 12 8.85555 12 8.66666C12 8.47778 11.9361 8.31944 11.8083 8.19166C11.6805 8.06389 11.5222 8 11.3333 8H4.66666C4.47777 8 4.31944 8.06389 4.19166 8.19166C4.06388 8.31944 3.99999 8.47778 3.99999 8.66666C3.99999 8.85555 4.06388 9.01389 4.19166 9.14166C4.31944 9.26944 4.47777 9.33333 4.66666 9.33333ZM4.66666 7.33333H11.3333C11.5222 7.33333 11.6805 7.26944 11.8083 7.14167C11.9361 7.01389 12 6.85555 12 6.66667C12 6.47778 11.9361 6.31944 11.8083 6.19167C11.6805 6.06389 11.5222 6 11.3333 6H4.66666C4.47777 6 4.31944 6.06389 4.19166 6.19167C4.06388 6.31944 3.99999 6.47778 3.99999 6.66667C3.99999 6.85555 4.06388 7.01389 4.19166 7.14167C4.31944 7.26944 4.47777 7.33333 4.66666 7.33333ZM4.66666 5.33333H11.3333C11.5222 5.33333 11.6805 5.26944 11.8083 5.14167C11.9361 5.01389 12 4.85555 12 4.66667C12 4.47778 11.9361 4.31944 11.8083 4.19167C11.6805 4.06389 11.5222 4 11.3333 4H4.66666C4.47777 4 4.31944 4.06389 4.19166 4.19167C4.06388 4.31944 3.99999 4.47778 3.99999 4.66667C3.99999 4.85555 4.06388 5.01389 4.19166 5.14167C4.31944 5.26944 4.47777 5.33333 4.66666 5.33333ZM2.66666 12C2.29999 12 1.98611 11.8694 1.72499 11.6083C1.46388 11.3472 1.33333 11.0333 1.33333 10.6667V2.66667C1.33333 2.3 1.46388 1.98611 1.72499 1.725C1.98611 1.46389 2.29999 1.33333 2.66666 1.33333H13.3333C13.7 1.33333 14.0139 1.46389 14.275 1.725C14.5361 1.98611 14.6667 2.3 14.6667 2.66667V13.05C14.6667 13.35 14.5305 13.5583 14.2583 13.675C13.9861 13.7917 13.7444 13.7444 13.5333 13.5333L12 12H2.66666ZM12.5667 10.6667L13.3333 11.4167V2.66667H2.66666V10.6667H12.5667Z"
                                            fill="white"
                                        />
                                    </svg>{' '}
                                    Comment
                                </span>
                            )}
                            <span className="text-sm px-3 py-1 bg-yellow-500 rounded-[2rem]">{createdAt}</span>
                        </div>
                        {contents?.map(({ link, text }) => {
                            if (link) {
                                return (
                                    <a
                                        key={text}
                                        href={link}
                                        target="_blank"
                                        className="underline text-lg cursor-pointer text-slate-400 hover:text-teal-300 leading-8"
                                    >
                                        {text}
                                    </a>
                                );
                            }

                            return (
                                <p key={text} className="text-lg cursor-pointer text-slate-400 leading-8">
                                    {text}
                                </p>
                            );
                        })}
                    </article>
                );
            })}
        </div>
    );
}

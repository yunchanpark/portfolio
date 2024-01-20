import GitHubMerge from '@/assets/icons/GitHubMerge';
import GitHubOpen from '@/assets/icons/GitHubOpen';
import Comment from '@/assets/icons/Comment';
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
                            {state === 'Merge' ? <GitHubMerge /> : state === 'Open' ? <GitHubOpen /> : <Comment />}
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

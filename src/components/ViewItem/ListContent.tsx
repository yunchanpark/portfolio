import React from 'react';

type ListItem = {
    title: string;
    list: {
        contents: string;
        children?: string[];
    }[];
};

export type ListContentProps = {
    data: ListItem[];
    styleType?: 'DOT' | 'NUMBER';
};

export default function ListContent({ data, styleType = 'NUMBER' }: ListContentProps) {
    return (
        <>
            {data.map((listItem) => (
                <div key={listItem.title} className="flex md:flex-row max-md:flex-col flex-wrap text-lg">
                    <p className="font-semibold w-48 max-md:mb-2">{listItem.title}</p>
                    <ul className="flex-1">
                        {listItem.list.map((item, index) => (
                            <li key={item.contents} className="pb-4">
                                {styleType === 'NUMBER' ? (
                                    <p className="font-semibold leading-loose">{`${index + 1}. ${item.contents}`}</p>
                                ) : (
                                    <p className="font-semibold leading-loose text-slate-400">{`● ${item.contents}`}</p>
                                )}
                                <ul className="max-w-lg ml-4">
                                    {item.children?.map((text) => (
                                        <li key={text} className="flex flex-row gap-2 text-base text-slate-400  leading-normal">
                                            <p>○</p>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}

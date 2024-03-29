import { ListContentProps } from './ListContent';
import { OpenSourceProps } from './OpenSource';
import { PeriodTextProps } from './PeriodText';
import { SkillsProps } from './Skills';
import { SubTitleProps } from './SubTitle';
import { TextProps } from './Text';
import { TimelineProps } from './Timeline';
import { TitleProps } from './Title';
import { UnderscoreTextProps } from './UnderscoreText';

interface TextType {
    type: 'TEXT';
    value: TextProps;
}

interface TitleType {
    type: 'TITLE';
    value: TitleProps;
}

interface UnderscoreTextType {
    type: 'UNDERSCORE';
    value: UnderscoreTextProps;
}

interface PeriodTextType {
    type: 'PERIOD';
    value: PeriodTextProps;
}

interface SubTitleType {
    type: 'SUB_TITLE';
    value: SubTitleProps;
}

interface ListContentType {
    type: 'LIST_CONTENT';
    value: ListContentProps;
}

interface SkillsType {
    type: 'SKILLS';
    value: SkillsProps;
}

interface OpenSourceType {
    type: 'OPEN_SOURCE';
    value: OpenSourceProps;
}

interface Timeline {
    type: 'TIME_LINE';
    value: TimelineProps;
}

type DataItemType =
    | TextType
    | TitleType
    | UnderscoreTextType
    | PeriodTextType
    | SubTitleType
    | ListContentType
    | SkillsType
    | OpenSourceType
    | Timeline;

type SocialMediaButton = {
    type: 'GitHub' | 'LinkedIn';
    href: string;
};

export type WorkSpaceType = {
    header: {
        email: string;
        socialMediaButtons: SocialMediaButton[];
    };
    workspace: {
        id: string;
        section: DataItemType[];
    }[];
};

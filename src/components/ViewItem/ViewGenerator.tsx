import ListContent from './ListContent';
import PeriodText from './PeriodText';
import SubTitle from './SubTitle';
import Text from './Text';
import Title from './Title';
import UnderscoreText from './UnderscoreText';
import Skills from './Skills';
import OpenSource from './OpenSource';
import Timeline from './Timeline';
import { profileData } from '@/constants/profile';

export default function ViewGenerator() {
    return (
        <div className="lg:w-3/4 pb-24 max-lg:px-10">
            {profileData.workspace.map(({ id, section }) => {
                return (
                    <section key={id} id={id} className="pt-24" aria-label={id}>
                        {section.map((item) => {
                            switch (item.type) {
                                case 'TITLE':
                                    return <Title key={item.type + item.value.text} {...item.value} />;
                                case 'UNDERSCORE':
                                    return <UnderscoreText key={item.type + item.value.text} {...item.value} />;
                                case 'PERIOD':
                                    return <PeriodText key={item.type + item.value.text} {...item.value} />;
                                case 'SUB_TITLE':
                                    return <SubTitle key={item.type + item.value.text} {...item.value} />;
                                case 'LIST_CONTENT':
                                    return <ListContent key={item.type + item.value.data.join('')} {...item.value} />;
                                case 'TEXT':
                                    return <Text key={item.type + item.value.text} {...item.value} />;
                                case 'SKILLS':
                                    return <Skills key={item.type} {...item.value} />;
                                case 'OPEN_SOURCE':
                                    return <OpenSource key={item.type} {...item.value} />;
                                case 'TIME_LINE':
                                    return <Timeline key={item.type} {...item.value} />;
                            }
                        })}
                    </section>
                );
            })}
        </div>
    );
}

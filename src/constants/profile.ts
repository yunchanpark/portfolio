import { WorkSpaceType } from '@/components/ViewItem/types';

export const profileData: WorkSpaceType = {
    // 헤더
    header: {
        socialMediaButtons: [
            {
                type: 'GitHub',
                href: 'https://github.com/yunchanpark',
            },
            {
                type: 'LinkedIn',
                href: 'https://www.linkedin.com/in/yunchan/',
            },
        ],
    },

    // 본문
    workspace: [
        {
            id: 'About Me',
            section: [
                {
                    type: 'TITLE',
                    value: {
                        text: 'About Me',
                    },
                },
                {
                    type: 'TEXT',
                    value: {
                        text: '프론트엔드 개발자를 희망하는 1년차 풀스택 개발자입니다.',
                    },
                },
            ],
        },

        // 회사
        {
            id: 'Work Experience',
            section: [
                {
                    type: 'TITLE',
                    value: {
                        text: 'Work Experience',
                    },
                },
                {
                    type: 'UNDERSCORE',
                    value: {
                        text: '더블유클럽',
                        links: [
                            {
                                icon: 'home',
                                href: 'https://wclub.co.kr/',
                            },
                        ],
                    },
                },
                {
                    type: 'PERIOD',
                    value: {
                        text: '2022.11.14 ~ 2023.05.31 (약 6개월)',
                    },
                },
                {
                    type: 'SKILLS',
                    value: {
                        contents: [
                            'React-Native',
                            'JavaScript',
                            'TypeScript',
                            'NextJS',
                            'Fastlane',
                            'NodeJS',
                            'MongoDB',
                            'Docker',
                            'AWS',
                            'GCP',
                        ],
                    },
                },
                {
                    type: 'SUB_TITLE',
                    value: {
                        text: 'What did I do.',
                    },
                },
                {
                    type: 'LIST_CONTENT',
                    value: {
                        data: [
                            {
                                title: 'FrontEnd',
                                list: [
                                    {
                                        contents: 'React-Native App → Hybrid App 작업',
                                        children: [
                                            'React-Native App에서 React-Native에 Webview를 이용해서 NextJS로 만든 웹페이지를 띄우는 Hybrid App으로 전환하는 작업을 진행했습니다.',
                                        ],
                                    },
                                    {
                                        contents: 'Design System 개선 작업',
                                        children: [
                                            '앱 UI가 전체적으로 바뀌면서 Design System에 UI 및 기능 추가 작업을 진행했습니다.',
                                        ],
                                    },
                                ],
                            },
                            {
                                title: 'Sustaining',
                                list: [
                                    {
                                        contents: '앱에서 발생한 버그 픽스',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },

        // 프로젝트
        {
            id: 'Projects',
            section: [
                {
                    type: 'TITLE',
                    value: {
                        text: 'Projects',
                    },
                },
                // 크롤
                {
                    type: 'UNDERSCORE',
                    value: {
                        text: '크롤 - CRAWL',
                        links: [
                            {
                                icon: 'home',
                                href: 'https://crawl-lab.shop/',
                            },
                            {
                                icon: 'apple',
                                href: 'https://apps.apple.com/kr/app/%ED%81%AC%EB%A1%A4/id6469619957',
                            },
                        ],
                    },
                },
                {
                    type: 'PERIOD',
                    value: {
                        text: '2023.06.01 ~ 운영 중 (약 6개월)',
                    },
                },
                {
                    type: 'SKILLS',
                    value: {
                        contents: [
                            'React-Native',
                            'React-Query',
                            'JavaScript',
                            'TypeScript',
                            'NextJS',
                            'Fastlane',
                            'NestJS',
                            'MongoDB',
                            'Docker',
                            'GCP',
                        ],
                    },
                },
                {
                    type: 'SUB_TITLE',
                    value: {
                        text: 'Team.',
                    },
                },
                {
                    type: 'TEXT',
                    value: {
                        text: '프론트엔드 - 1명, 백엔드 - 1명',
                    },
                },
                {
                    type: 'SUB_TITLE',
                    value: {
                        text: 'Description.',
                    },
                },
                {
                    type: 'TEXT',
                    value: {
                        text: '크롤은 파충류, 양서류, 절지류에 특화된 소셜 플랫폼으로, 사용자들은 자신의 반려 동물과 함께한 일상을 기록하고 다른 애호가들과 소통하는 공간을 제공합니다. 다양한 종류의 파충류에 관한 정보를 나누며, 동물 친구들과의 특별한 순간을 기록합니다.',
                    },
                },
                {
                    type: 'SUB_TITLE',
                    value: {
                        text: 'What did I do.',
                    },
                },
                {
                    type: 'LIST_CONTENT',
                    value: {
                        data: [
                            {
                                title: 'FrontEnd',
                                list: [
                                    {
                                        contents: '여러 독립적인 패키지 구현',
                                        children: ['바텀시트, 캘린더, 이미지 크롭 등의 내부 패키지를 구현했습니다.'],
                                    },
                                    {
                                        contents: '자주 변경되는 페이지는 Webview로 구성',
                                        children: [
                                            '이용약관, 개인정보 처리방침, 홈페이지와 같이 자주 변경되는 페이지들은 Webview로 구성했습니다.',
                                        ],
                                    },
                                    {
                                        contents: 'Notifee와 Firebase Messaging을 활용한 Push 알림 구현',
                                        children: [
                                            '유저의 리마인드를 위해 Push 알림을 도입했습니다.',
                                            'Notifee와 Firebase Messaging를 활용하여 푸시알림을 구현했습니다',
                                        ],
                                    },
                                    {
                                        contents: 'Fastlane을 활용한 배포 자동화 파이프라인 구축',
                                        children: ['Fastlane을 활용하여 App Store Testflight에 자동 배포 환경을 구축했습니다.'],
                                    },
                                    {
                                        contents: 'MSW를 활용한 Mocking하는 환경 구성',
                                        children: [
                                            'BackEnd에 의존하지 않고 개발을 하기 위해 MSW를 도입하여 API 스펙 협의 후 바로 개발할 수 있는 환경을 구성했습니다.',
                                        ],
                                    },
                                    {
                                        contents: '모노레포 환경 구성',
                                        children: [
                                            'yarn workspace, eslint, prettier, husky, lintstaged를 활용하여 모노레포 환경 구성',
                                        ],
                                    },
                                ],
                            },
                            {
                                title: 'BackEnd',
                                list: [
                                    {
                                        contents: '배포 자동화 파이프라인 구축',
                                        children: ['git tag를 이용하여 GCP에 배포하는 파이프라인을 구축했습니다.'],
                                    },
                                    {
                                        contents: 'Push 알림',
                                        children: [
                                            '특정 이벤트가 발생할 때, Firebase Messaging을 사용하여 정해진 템플릿에 맞게 사용자에게 Push 알림을 보내는 기능을 구현했습니다.',
                                        ],
                                    },
                                    {
                                        contents: '팀 Slack 알림 봇',
                                        children: [
                                            '배포 완료, 트리거 하고 싶은 에러 및 로그 등을 기록할 수 있게 Slack에 Message 보내는 기능을 모듈화 했습니다.',
                                        ],
                                    },
                                    {
                                        contents: 'script를 실행으로 간단한 MongoDB local 환경 세팅',
                                        children: [
                                            'DockerFile과 script를 사용하여 local 환경에 MongoDB replica set 환경이 구성되도록 했습니다.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },

                // 내 웃음 돌리도
                {
                    type: 'UNDERSCORE',
                    value: {
                        text: '내 웃음 돌리도',
                    },
                },
                {
                    type: 'PERIOD',
                    value: {
                        text: '2022.06 ~ 2022.08 (5주)',
                    },
                },
                {
                    type: 'SKILLS',
                    value: {
                        contents: ['React', 'Socket.io', 'NodeJS', 'Face API', 'MySQL', 'AWS'],
                    },
                },
                {
                    type: 'SUB_TITLE',
                    value: {
                        text: 'Team.',
                    },
                },
                {
                    type: 'TEXT',
                    value: {
                        text: '풀스택 - 5명',
                    },
                },
                {
                    type: 'SUB_TITLE',
                    value: {
                        text: 'Description.',
                    },
                },
                {
                    type: 'TEXT',
                    value: {
                        text: '웃음참기 서바이벌 웹 게임입니다. 웃긴 이미지 컨텐츠를 통해 유저를 웃기게 만들고 AI가 웃음을 판별하여 패배자를 가리는 서비스이며 안에 게임적인 요소(아이템, 스킬, 티어 등)들이 포함되어 있습니다. 팀에서는 팀원으로 역할을 수행했습니다.',
                    },
                },
                {
                    type: 'SUB_TITLE',
                    value: {
                        text: 'What did I do.',
                    },
                },
                {
                    type: 'LIST_CONTENT',
                    value: {
                        data: [
                            {
                                title: 'FrontEnd',
                                list: [
                                    {
                                        contents: 'InGame 코드 리팩토링',
                                        children: [
                                            '하나의 파일에 작성되어서 원하지 않는 리렌더링이 발생하여 컴포넌트를 분리하고 redux로 상태 값을 관리하여 원하는 리렌더링이 될 수 있게 리팩토링했습니다.',
                                        ],
                                    },
                                ],
                            },
                            {
                                title: 'BackEnd',
                                list: [
                                    {
                                        contents: 'Jmeter로 테스트 시나리오 작성 및 EC2 CPU 사용률 테스트',
                                        children: [
                                            '서버 부하가 발생하는 구간을 측정하기 위해 테스트 시나리오를 작성하고 서버의 CPU 사용률을 측정했습니다.',
                                        ],
                                    },
                                    {
                                        contents: '실시간 영상 스트리밍 (WebRTC) 버그 수정',
                                        children: [
                                            '게임에서 다른 플레이어 영상이 간헐적으로 연결이 끊기는 문제를 디버깅 하여 WebRTC 시그널링 문제인 것을 발견하고 버그를 수정했습니다.',
                                            'socket.io와 RTCPeerConnection를 이용하여 mesh 방식으로 영상 스트리밍을 연결하게 구현했습니다.',
                                        ],
                                    },
                                    {
                                        contents: '아키텍쳐 설계 및 AWS로 서버 세팅 (Route 53, Cloud Front, S3, ELB, EC2, RDS)',
                                        children: [
                                            '서버 부하를 줄이고 사용자가 원할한 서비스를 사용할 수 있게 아키텍쳐를 설계하고 서버를 세팅했습니다.',
                                        ],
                                    },
                                    {
                                        contents: '게임 아이템 (나만의 무기) API 구현',
                                        children: [
                                            '게임에서 사용할 아이템인 GIF 원본 이름과 S3에 저장될 이름을 DB에 등록, 수정, 조회 API를 구현했습니다.',
                                        ],
                                    },
                                    {
                                        contents: '로그인 및 회원가입 (JWT + PBKDF2) API 구현',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },

        // 오픈소스
        {
            id: 'Open Source',
            section: [
                {
                    type: 'TITLE',
                    value: {
                        text: 'Open Sources',
                    },
                },
                {
                    type: 'OPEN_SOURCE',
                    value: {
                        contents: [
                            {
                                state: 'Merge',
                                libraryName: 'react-native-haptic-feedback',

                                createdAt: '2023/09/07',
                                contents: [
                                    {
                                        text: 'merge된 pull request 링크',
                                        link: 'https://github.com/mkuczera/react-native-haptic-feedback/pull/111',
                                    },
                                    {
                                        text: '간단한 오류 수정',
                                    },
                                ],
                            },
                            {
                                state: 'Comment',
                                libraryName: 'libphonenumber-js',
                                createdAt: '2023/05/15',
                                contents: [
                                    {
                                        text: 'comment한 링크',
                                        link: 'https://gitlab.com/catamphetamine/libphonenumber-js/-/commit/732c5933cd19ecac8c0e55a48fbc347f99e3bab4#note_1314492687',
                                    },
                                    {
                                        text: '간단한 오타 수정',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    ],
} as const;

export const NAV_MENU = profileData.workspace.map(({ id }) => id);

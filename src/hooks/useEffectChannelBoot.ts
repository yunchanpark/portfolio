import { useEffect, useRef } from 'react';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import { env } from 'process';

export default function useEffectChannelBoot() {
    useEffect(() => {
        ChannelService.loadScript();
        ChannelService.boot({
            pluginKey: process.env.NEXT_PUBLIC_PLUGIN_KEY ?? '',
        });
    }, []);
}

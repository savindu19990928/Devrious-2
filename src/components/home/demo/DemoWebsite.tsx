import { DemoSiteFrame } from './DemoSiteFrame';
import { demoBrandSites } from '../../../data/demo';
import type { DemoDeviceMode } from '../../../types/content';

interface DemoWebsiteProps {
  activeSlug: string;
  onSelectSlug: (slug: string) => void;
  device: DemoDeviceMode;
}

export function DemoWebsite({ activeSlug, onSelectSlug, device }: DemoWebsiteProps) {
  return <DemoSiteFrame sites={demoBrandSites} activeSlug={activeSlug} onSelectSlug={onSelectSlug} device={device} />;
}

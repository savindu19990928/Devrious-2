import { DemoSiteFrame } from './DemoSiteFrame';
import { demoStoreSites } from '../../../data/demo';
import type { DemoDeviceMode } from '../../../types/content';

interface DemoStoreProps {
  activeSlug: string;
  onSelectSlug: (slug: string) => void;
  device: DemoDeviceMode;
}

export function DemoStore({ activeSlug, onSelectSlug, device }: DemoStoreProps) {
  return <DemoSiteFrame sites={demoStoreSites} activeSlug={activeSlug} onSelectSlug={onSelectSlug} device={device} />;
}

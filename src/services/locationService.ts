import { SERVICE_AREAS } from '@/data/locations';
import { ServiceArea } from '@/types';

export async function getAllLocations(): Promise<ServiceArea[]> {
  return SERVICE_AREAS;
}

export async function getLocationBySlug(slug: string): Promise<ServiceArea | undefined> {
  return SERVICE_AREAS.find((loc) => loc.slug === slug);
}

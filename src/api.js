// @flow

const apiUrl = 'https://yard.moscow/api/v1';
const imagesUrl = 'https://s3-eu-central-1.amazonaws.com/yard-images';

export function get(resource: string): Promise<*> {
  return fetch(`${apiUrl}${resource}`).then(res => res.json());
}

export function getImage(id: string, size: number): string {
  return `${imagesUrl}/${id}-${size}`;
}

// @flow

export type ComplexImage = {
  id: string,
  isPublic: boolean
}

export type Complex = {
  name: string,
  location: {
    subLocalityName: string,
    countryName: ?string,
    postalCode: ?number,
    house: ?number,
    localityName: ?string,
    street: string,
    regionName: ?string
  },
  statistics: {
    price: {
      from: {
        usd: number,
        eur: number,
        rub: number
      },
      to: {
        usd: number,
        eur: number,
        rub: number
      },
    },
    propertiesCount: number
  },
  id: number,
  images: Array<ComplexImage>
};

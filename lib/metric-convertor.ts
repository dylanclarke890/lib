export enum ConversionType {
  mg_to_g,
  g_to_kg,
  kg_to_g,
}

export class ConversionRateProvider {
  static #rates = {};

  getRateByType(type: ConversionType) {
    return ConversionRateProvider.#rates[type];
  }
}

export class MetricConverter {
  conversionType: ConversionType;
  provider: ConversionRateProvider;

  constructor(conversionType: ConversionType, provider: ConversionRateProvider) {
    this.conversionType = conversionType;
    this.provider = provider;
  }

  calculate(amount) {
    return this.provider.getRateByType(this.conversionType);
  }
}

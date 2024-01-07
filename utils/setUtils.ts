import type { Set } from '~/types/set';

export function getRetailPrice(set: Set): number {
  if (!set.LEGOCom) {
    return 0;
  }

  const filteredData = Object.entries(set.LEGOCom).filter((legoCom) => !!legoCom[1].retailPrice);
  const retailPrices = filteredData.map((legoCom) => {
    const retailPrice = legoCom[1].retailPrice;
    if (retailPrice) {
      return retailPrice;
    }
  });

  return new Set(retailPrices).values().next().value;
}

export function getRetirementYear(set: Set): number | undefined {
  if (!set.LEGOCom) {
    return;
  }

  const filteredData = Object.entries(set.LEGOCom).filter((legoCom) => !!legoCom[1].dateLastAvailable);
  const lastAvailableDates = filteredData.map((legoCom) => {
    const dateLastAvailable = legoCom[1].dateLastAvailable;
    if (dateLastAvailable) {
      return new Date(legoCom[1].dateLastAvailable).getFullYear();
    }
  });

  return new Set(lastAvailableDates).values().next().value;
}

export function getYearsRetired(set: Set): number | undefined {
  const retirementYear = getRetirementYear(set);
  if (retirementYear) {
    const now = new Date().getFullYear();
    return now - retirementYear;
  }
}

export function getShelfLife(set: Set): number {
  const releaseYear = set.year;
  const now = new Date().getFullYear();
  const retirementYear = getRetirementYear(set);
  if (retirementYear) {
    return retirementYear - releaseYear;
  }

  return now - releaseYear;
}

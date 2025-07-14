"use client";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const SLIDE_INTERVAL = 5000;

export const useHomeBanner = () => {
  const autoplay = useCallback(() => Autoplay({ delay: SLIDE_INTERVAL, stopOnInteraction: false }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setAnimationKey((prev) => prev + 1);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return { emblaRef, selectedIndex, animationKey, SLIDE_INTERVAL };
};

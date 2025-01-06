import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { mainTeamCopy } from "@/utils/copy";

export function TeamTestimonials() {
  return <AnimatedTestimonials testimonials={mainTeamCopy.testimonials} />;
}

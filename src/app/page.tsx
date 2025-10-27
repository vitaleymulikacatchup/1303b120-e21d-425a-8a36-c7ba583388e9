"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Gift, Heart, Mail, Shield, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Toys", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TOYSTORY"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Where Every Toy Tells a Story"
          description="Discover magical toys that spark imagination, creativity, and endless fun for children of all ages. From educational games to cuddly companions."
          tag="Magical Toys"
          tagIcon={Star}
          buttons={[
            { text: "Shop Toys", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/3806754/pexels-photo-3806754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Colorful collection of children's toys"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="About TOYSTORY"
          description={[
            "We believe every child deserves toys that inspire creativity, learning, and joy. For over a decade, we've been curating the finest collection of safe, educational, and fun toys.",
            "From building blocks that develop problem-solving skills to plush companions that provide comfort, our toys are carefully selected to support every stage of childhood development."
          ]}
          buttons={[
            { text: "Our Story", href: "about" }
          ]}
          showBorder={true}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Toys"
          description="Discover our most popular toys loved by children and trusted by parents worldwide"
          tag="Best Sellers"
          tagIcon={Gift}
          products={[
            {
              id: "1",
              name: "Creative Building Blocks Set",
              price: "$29.99",
              imageSrc: "https://images.pexels.com/photos/4934174/pexels-photo-4934174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Colorful building blocks set"
            },
            {
              id: "2",
              name: "Cuddly Bear Collection",
              price: "$24.99",
              imageSrc: "https://images.pexels.com/photos/6441503/pexels-photo-6441503.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cute stuffed animals"
            },
            {
              id: "3",
              name: "Educational Learning Games",
              price: "$34.99",
              imageSrc: "https://images.pexels.com/photos/8363102/pexels-photo-8363102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Educational toys for children"
            },
            {
              id: "4",
              name: "Super Hero Action Figures",
              price: "$19.99",
              imageSrc: "https://images.pexels.com/photos/69314/pexels-photo-69314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Superhero action figures"
            },
            {
              id: "5",
              name: "Princess Doll Collection",
              price: "$39.99",
              imageSrc: "https://images.pexels.com/photos/2180141/pexels-photo-2180141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beautiful princess dolls"
            },
            {
              id: "6",
              name: "Race Car Adventure Set",
              price: "$44.99",
              imageSrc: "https://images.pexels.com/photos/8535221/pexels-photo-8535221.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Toy cars and vehicles"
            }
          ]}
          buttons={[
            { text: "View All Toys", href: "https://toystory.com/shop" }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Parents Say"
          description="Real feedback from families who trust TOYSTORY for their children's playtime"
          tag="Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahj_mom",
              testimonial: "My kids absolutely love their TOYSTORY toys! The quality is amazing and they've provided hours of creative play. Highly recommend!",
              imageSrc: "https://images.pexels.com/photos/7415122/pexels-photo-7415122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Mike Chen",
              handle: "@dadlife_mike",
              testimonial: "Best toy store ever! The educational games have helped my daughter learn while having fun. The customer service is exceptional too.",
              imageSrc: "https://images.pexels.com/photos/7415122/pexels-photo-7415122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Mike Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emma_family",
              testimonial: "TOYSTORY has been our go-to for birthdays and holidays. The toys are safe, durable, and my children never get bored with them.",
              imageSrc: "https://images.pexels.com/photos/34412337/pexels-photo-34412337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              handle: "@david_dad",
              testimonial: "Incredible selection and fast shipping! My son's face lights up every time we get a package from TOYSTORY. Worth every penny.",
              imageSrc: "https://images.pexels.com/photos/34399473/pexels-photo-34399473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            },
            {
              id: "5",
              name: "Lisa Park",
              handle: "@lisamom_adventures",
              testimonial: "The building blocks set has been amazing for my twins' development. They're learning problem-solving while having a blast!",
              imageSrc: "https://images.pexels.com/photos/2274162/pexels-photo-2274162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Park"
            }
          ]}
        />
      </div>
      
      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted Brand Partners"
          description="We work with the world's most beloved toy brands to bring you quality and safety"
          tag="Partners"
          tagIcon={Shield}
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18530623/pexels-photo-18530623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our toys and services"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "Are all toys safe for children?",
              content: "Absolutely! All our toys meet or exceed safety standards and are tested for quality. We only partner with certified manufacturers who prioritize child safety."
            },
            {
              id: "2",
              title: "What age groups do you cater to?",
              content: "We have toys for all ages, from infants to teenagers. Each product clearly indicates the recommended age range to help you make the best choice."
            },
            {
              id: "3",
              title: "Do you offer gift wrapping?",
              content: "Yes! We offer beautiful gift wrapping services for birthdays, holidays, and special occasions. Just select the gift wrap option at checkout."
            },
            {
              id: "4",
              title: "What is your return policy?",
              content: "We offer a 30-day return policy on all items. If you're not completely satisfied, you can return toys in their original condition for a full refund."
            },
            {
              id: "5",
              title: "Do you offer educational toys?",
              content: "Yes! We have a dedicated section for educational toys that promote learning in areas like STEM, language, creativity, and problem-solving skills."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated with TOYSTORY"
          description="Get the latest updates on new arrivals, special offers, and parenting tips delivered to your inbox every week."
          imageSrc="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Happy family with toys"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our weekly newsletter. You can unsubscribe at any time."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="TOYSTORY"
          columns={[
            {
              items: [
                { label: "All Toys", href: "products" },
                { label: "Educational", href: "educational" },
                { label: "Action Figures", href: "action-figures" },
                { label: "Dolls", href: "dolls" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "story" },
                { label: "Safety", href: "safety" },
                { label: "Reviews", href: "testimonials" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Shipping Info", href: "shipping" },
                { label: "Returns", href: "returns" },
                { label: "Gift Cards", href: "gift-cards" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import heroImage from "@/assets/hero-home.jpg";
import interiorBanner from "@/assets/interior-banner.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import vibhutiImg from "@/assets/vibhuti.png";
import gurbaniImg from "@/assets/gurbani.png";
import sufiyanImg from "@/assets/sufiyan.png";
import kamranImg from "@/assets/kamran.png";
import vanyImg from "@/assets/vany.png";
import alokImg from "@/assets/alok.png";

export interface Property {
  id: number;
  title: string;
  price: string;
  area: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  type?: 'residential' | 'commercial' | 'penthouse' | 'new-launch';
  status?: 'new-launch' | 'ready' | 'under-construction' | 'featured';
  builder?: string;
  description?: string;
  amenities?: string[];
}

export const residentialProperties: Property[] = [
  { id: 1, title: "3 BHK Flat", price: "3.60 Cr", area: "1445 sqft", location: "Kandivali East, Mumbai", bedrooms: 3, bathrooms: 2, sqft: 1445, image: property1, type: 'residential', status: 'ready', builder: "Lodha Group", description: "Spacious 3 BHK with modern amenities", amenities: ["Gym", "Pool", "Parking"] },
  { id: 2, title: "3 BHK Flat", price: "4.20 Cr", area: "1650 sqft", location: "Bandra West, Mumbai", bedrooms: 3, bathrooms: 2, sqft: 1650, image: property2, type: 'residential', status: 'featured', builder: "Runwal Group", description: "Premium location with sea view", amenities: ["Gym", "Club House", "Security"] },
  { id: 3, title: "2 BHK Flat", price: "2.80 Cr", area: "1200 sqft", location: "Khar West, Mumbai", bedrooms: 2, bathrooms: 2, sqft: 1200, image: property3, type: 'residential', status: 'ready', builder: "Kalpataru", description: "Well-designed 2 BHK apartment", amenities: ["Parking", "Lift", "Power Backup"] },
  { id: 4, title: "4 BHK Penthouse", price: "8.50 Cr", area: "2800 sqft", location: "Juhu, Mumbai", bedrooms: 4, bathrooms: 3, sqft: 2800, image: property4, type: 'penthouse', status: 'featured', builder: "Oberoi Realty", description: "Luxurious penthouse with terrace", amenities: ["Terrace", "Gym", "Pool", "Concierge"] },
  { id: 5, title: "3 BHK Flat", price: "5.10 Cr", area: "1800 sqft", location: "Santacruz West, Mumbai", bedrooms: 3, bathrooms: 2, sqft: 1800, image: property1, type: 'residential', status: 'ready', builder: "Godrej Properties", description: "Elegant 3 BHK in prime location", amenities: ["Gym", "Garden", "Parking"] },
  { id: 6, title: "2 BHK Flat", price: "3.20 Cr", area: "1100 sqft", location: "Worli, Mumbai", bedrooms: 2, bathrooms: 2, sqft: 1100, image: property2, type: 'residential', status: 'new-launch', builder: "Lodha Group", description: "New launch with sea facing", amenities: ["Pool", "Gym", "Spa"] },
  { id: 7, title: "3 BHK Flat", price: "6.00 Cr", area: "2000 sqft", location: "Pali Hill, Mumbai", bedrooms: 3, bathrooms: 3, sqft: 2000, image: property3, type: 'residential', status: 'featured', builder: "Runwal Group", description: "Ultra luxury in Pali Hill", amenities: ["Gym", "Pool", "Club House", "Security"] },
  { id: 8, title: "4 BHK Duplex", price: "12.00 Cr", area: "3500 sqft", location: "Bandra West, Mumbai", bedrooms: 4, bathrooms: 4, sqft: 3500, image: property4, type: 'penthouse', status: 'featured', builder: "Oberoi Realty", description: "Duplex with premium finishes", amenities: ["Private Terrace", "Gym", "Pool", "Concierge"] },
  { id: 9, title: "2 BHK Flat", price: "1.85 Cr", area: "950 sqft", location: "Malad West, Mumbai", bedrooms: 2, bathrooms: 2, sqft: 950, image: property1, type: 'residential', status: 'ready', builder: "Kalpataru", description: "Affordable luxury in Malad", amenities: ["Parking", "Lift", "Security"] },
  { id: 10, title: "3 BHK Flat", price: "4.50 Cr", area: "1550 sqft", location: "Andheri West, Mumbai", bedrooms: 3, bathrooms: 2, sqft: 1550, image: property2, type: 'residential', status: 'ready', builder: "Godrej Properties", description: "Modern 3 BHK near metro", amenities: ["Gym", "Club House", "Parking"] },
  { id: 11, title: "1 BHK Flat", price: "1.20 Cr", area: "650 sqft", location: "Goregaon East, Mumbai", bedrooms: 1, bathrooms: 1, sqft: 650, image: property3, type: 'residential', status: 'new-launch', builder: "Lodha Group", description: "Compact and efficient design", amenities: ["Gym", "Parking"] },
  { id: 12, title: "3 BHK Flat", price: "7.50 Cr", area: "2200 sqft", location: "Marine Drive, Mumbai", bedrooms: 3, bathrooms: 3, sqft: 2200, image: property4, type: 'residential', status: 'featured', builder: "Runwal Group", description: "Iconic Marine Drive address", amenities: ["Sea View", "Gym", "Pool", "Concierge"] },
  { id: 13, title: "2 BHK Flat", price: "2.50 Cr", area: "1050 sqft", location: "Powai, Mumbai", bedrooms: 2, bathrooms: 2, sqft: 1050, image: property1, type: 'residential', status: 'ready', builder: "Kalpataru", description: "Lake facing apartments", amenities: ["Lake View", "Gym", "Parking"] },
  { id: 14, title: "4 BHK Flat", price: "9.00 Cr", area: "3000 sqft", location: "Lower Parel, Mumbai", bedrooms: 4, bathrooms: 4, sqft: 3000, image: property2, type: 'residential', status: 'new-launch', builder: "Oberoi Realty", description: "Ultra luxury high-rise", amenities: ["Sky Lounge", "Gym", "Pool", "Spa"] },
  { id: 15, title: "3 BHK Flat", price: "3.80 Cr", area: "1400 sqft", location: "Chembur, Mumbai", bedrooms: 3, bathrooms: 2, sqft: 1400, image: property3, type: 'residential', status: 'ready', builder: "Godrej Properties", description: "Well-connected location", amenities: ["Gym", "Garden", "Parking"] },
];

export const commercialProperties: Property[] = [
  { id: 1, title: "Office Space", price: "1.50 Cr", area: "850 sqft", location: "BKC, Mumbai", bedrooms: 0, bathrooms: 1, sqft: 850, image: property3, type: 'commercial', status: 'ready', builder: "Lodha Group", description: "Prime BKC address", amenities: ["Parking", "Lift", "Security"] },
  { id: 2, title: "Retail Shop", price: "2.00 Cr", area: "600 sqft", location: "Linking Road, Mumbai", bedrooms: 0, bathrooms: 1, sqft: 600, image: property4, type: 'commercial', status: 'featured', builder: "Runwal Group", description: "High footfall area", amenities: ["AC", "Security", "Parking"] },
  { id: 3, title: "Commercial Space", price: "3.50 Cr", area: "1500 sqft", location: "Andheri East, Mumbai", bedrooms: 0, bathrooms: 2, sqft: 1500, image: property1, type: 'commercial', status: 'ready', builder: "Kalpataru", description: "Near airport", amenities: ["Parking", "Lift", "Power Backup"] },
  { id: 4, title: "Office Suite", price: "5.00 Cr", area: "2200 sqft", location: "Lower Parel, Mumbai", bedrooms: 0, bathrooms: 2, sqft: 2200, image: property2, type: 'commercial', status: 'new-launch', builder: "Oberoi Realty", description: "Grade A office space", amenities: ["Conference Room", "Gym", "Cafeteria"] },
  { id: 5, title: "Showroom", price: "4.00 Cr", area: "1800 sqft", location: "Bandra West, Mumbai", bedrooms: 0, bathrooms: 1, sqft: 1800, image: property3, type: 'commercial', status: 'ready', builder: "Godrej Properties", description: "Premium showroom space", amenities: ["Parking", "AC", "Security"] },
  { id: 6, title: "Co-working Space", price: "2.50 Cr", area: "1200 sqft", location: "Worli, Mumbai", bedrooms: 0, bathrooms: 2, sqft: 1200, image: property4, type: 'commercial', status: 'featured', builder: "Lodha Group", description: "Modern co-working setup", amenities: ["Internet", "Meeting Rooms", "Pantry"] },
  { id: 7, title: "Warehouse", price: "6.00 Cr", area: "5000 sqft", location: "Goregaon East, Mumbai", bedrooms: 0, bathrooms: 1, sqft: 5000, image: property1, type: 'commercial', status: 'ready', builder: "Runwal Group", description: "Large warehouse facility", amenities: ["Loading Dock", "Security", "Power Backup"] },
  { id: 8, title: "Office Floor", price: "8.00 Cr", area: "3000 sqft", location: "Nariman Point, Mumbai", bedrooms: 0, bathrooms: 3, sqft: 3000, image: property2, type: 'commercial', status: 'featured', builder: "Kalpataru", description: "Full floor in iconic tower", amenities: ["Sea View", "Parking", "Conference Room"] },
  { id: 9, title: "Retail Space", price: "3.00 Cr", area: "1000 sqft", location: "Phoenix Mall, Mumbai", bedrooms: 0, bathrooms: 1, sqft: 1000, image: property3, type: 'commercial', status: 'new-launch', builder: "Oberoi Realty", description: "Mall retail space", amenities: ["AC", "Parking", "Security"] },
  { id: 10, title: "IT Office", price: "4.50 Cr", area: "2000 sqft", location: "Powai, Mumbai", bedrooms: 0, bathrooms: 2, sqft: 2000, image: property4, type: 'commercial', status: 'ready', builder: "Godrej Properties", description: "Tech hub location", amenities: ["Internet", "Parking", "Cafeteria"] },
];

export const newLaunches: Property[] = [
  { id: 1, title: "The Imperial Tower", price: "5.50 Cr onwards", area: "1650-2800 sqft", location: "Worli, Mumbai", bedrooms: 3, bathrooms: 3, sqft: 1650, image: gallery1, type: 'new-launch', status: 'new-launch', builder: "Lodha Group", description: "Ultra-luxury high-rise with panoramic sea views", amenities: ["Infinity Pool", "Sky Lounge", "Spa", "Gym", "Concierge"] },
  { id: 2, title: "Parkview Residences", price: "3.20 Cr onwards", area: "1200-1800 sqft", location: "Bandra East, Mumbai", bedrooms: 2, bathrooms: 2, sqft: 1200, image: gallery2, type: 'new-launch', status: 'new-launch', builder: "Runwal Group", description: "Contemporary living with park views", amenities: ["Garden", "Gym", "Club House", "Parking"] },
  { id: 3, title: "Marine Crown", price: "8.00 Cr onwards", area: "2200-3500 sqft", location: "Marine Lines, Mumbai", bedrooms: 3, bathrooms: 4, sqft: 2200, image: gallery3, type: 'new-launch', status: 'new-launch', builder: "Oberoi Realty", description: "Iconic address on Marine Drive", amenities: ["Sea View", "Pool", "Gym", "Spa", "Concierge"] },
  { id: 4, title: "Green Valley Estate", price: "2.80 Cr onwards", area: "1000-1500 sqft", location: "Powai, Mumbai", bedrooms: 2, bathrooms: 2, sqft: 1000, image: gallery4, type: 'new-launch', status: 'new-launch', builder: "Kalpataru", description: "Eco-friendly homes near lake", amenities: ["Lake View", "Garden", "Gym", "Parking"] },
  { id: 5, title: "Sky Heights", price: "4.50 Cr onwards", area: "1500-2200 sqft", location: "Andheri West, Mumbai", bedrooms: 3, bathrooms: 3, sqft: 1500, image: gallery5, type: 'new-launch', status: 'new-launch', builder: "Godrej Properties", description: "Modern apartments with city views", amenities: ["Rooftop Pool", "Gym", "Club House", "Security"] },
  { id: 6, title: "The Grandeur", price: "6.50 Cr onwards", area: "2000-3000 sqft", location: "Juhu, Mumbai", bedrooms: 4, bathrooms: 4, sqft: 2000, image: gallery6, type: 'new-launch', status: 'new-launch', builder: "Lodha Group", description: "Beachfront luxury living", amenities: ["Beach Access", "Pool", "Spa", "Gym", "Concierge"] },
];

export const luxuryPenthouses: Property[] = [
  { id: 1, title: "Royal Penthouse", price: "15.00 Cr", area: "4500 sqft", location: "Bandra West, Mumbai", bedrooms: 5, bathrooms: 5, sqft: 4500, image: gallery1, type: 'penthouse', status: 'featured', builder: "Oberoi Realty", description: "Ultra-luxurious penthouse with private pool", amenities: ["Private Pool", "Terrace Garden", "Jacuzzi", "Home Theater", "Servant Room"] },
  { id: 2, title: "Sky Villa", price: "18.50 Cr", area: "5200 sqft", location: "Worli Sea Face, Mumbai", bedrooms: 5, bathrooms: 6, sqft: 5200, image: gallery2, type: 'penthouse', status: 'featured', builder: "Lodha Group", description: "Duplex penthouse with 360° views", amenities: ["Private Elevator", "Pool", "Gym", "Wine Cellar", "Concierge"] },
  { id: 3, title: "The Crown Jewel", price: "22.00 Cr", area: "6000 sqft", location: "Marine Drive, Mumbai", bedrooms: 6, bathrooms: 6, sqft: 6000, image: gallery3, type: 'penthouse', status: 'featured', builder: "Runwal Group", description: "Full floor penthouse on Marine Drive", amenities: ["Panoramic Views", "Private Terrace", "Pool", "Spa", "Home Theater"] },
  { id: 4, title: "Ocean Penthouse", price: "12.00 Cr", area: "3800 sqft", location: "Juhu, Mumbai", bedrooms: 4, bathrooms: 4, sqft: 3800, image: gallery4, type: 'penthouse', status: 'featured', builder: "Kalpataru", description: "Beachfront penthouse living", amenities: ["Beach View", "Terrace", "Pool", "Gym", "Security"] },
  { id: 5, title: "Imperial Penthouse", price: "25.00 Cr", area: "7000 sqft", location: "Lower Parel, Mumbai", bedrooms: 6, bathrooms: 7, sqft: 7000, image: gallery5, type: 'penthouse', status: 'featured', builder: "Godrej Properties", description: "The pinnacle of luxury living", amenities: ["Private Pool", "Helipad Access", "Wine Cellar", "Home Theater", "Concierge"] },
];

export const builders = [
  { id: 1, name: "Lodha Group", projects: 45, logo: "", description: "India's largest real estate developer" },
  { id: 2, name: "Oberoi Realty", projects: 38, logo: "", description: "Premium luxury developments" },
  { id: 3, name: "Runwal Group", projects: 52, logo: "", description: "Trusted developer since 1978" },
  { id: 4, name: "Kalpataru", projects: 41, logo: "", description: "Quality construction and design" },
  { id: 5, name: "Godrej Properties", projects: 35, logo: "", description: "Innovation in real estate" },
  { id: 6, name: "Prestige Group", projects: 29, logo: "", description: "South India's leading developer" },
];

export const locations = [
  { id: 1, name: "Bandra West", properties: 156, avgPrice: "4.5 Cr", image: gallery1, description: "The Queen of Suburbs" },
  { id: 2, name: "Juhu", properties: 98, avgPrice: "6.2 Cr", image: gallery2, description: "Beachfront luxury living" },
  { id: 3, name: "Worli", properties: 134, avgPrice: "5.8 Cr", image: gallery3, description: "Sea face premium addresses" },
  { id: 4, name: "Lower Parel", properties: 112, avgPrice: "4.2 Cr", image: gallery4, description: "Mumbai's new CBD" },
  { id: 5, name: "Powai", properties: 87, avgPrice: "2.8 Cr", image: gallery5, description: "Lake city lifestyle" },
  { id: 6, name: "Andheri West", properties: 145, avgPrice: "3.5 Cr", image: gallery6, description: "Entertainment hub" },
  { id: 7, name: "Santacruz", properties: 76, avgPrice: "3.9 Cr", image: gallery1, description: "Prime central location" },
  { id: 8, name: "Khar", properties: 64, avgPrice: "4.1 Cr", image: gallery2, description: "Upscale residential area" },
];

export const testimonials = [
  { id: 1, name: "Rajesh Mehta", location: "Bandra West", rating: 5, comment: "Exceptional service! Found my dream home in just 2 weeks.", image: "" },
  { id: 2, name: "Priya Sharma", location: "Juhu", rating: 5, comment: "Professional team with deep market knowledge. Highly recommended!", image: "" },
  { id: 3, name: "Amit Patel", location: "Worli", rating: 5, comment: "Smooth transaction from start to finish. Very transparent process.", image: "" },
  { id: 4, name: "Sneha Gupta", location: "Powai", rating: 5, comment: "Best real estate consultancy in Mumbai. They understand client needs.", image: "" },
  { id: 5, name: "Vikram Singh", location: "Lower Parel", rating: 5, comment: "Invested in 3 properties through them. Excellent ROI advice.", image: "" },
  { id: 6, name: "Meera Joshi", location: "Andheri West", rating: 5, comment: "Very helpful with legal documentation and home loan assistance.", image: "" },
];

export const teamMembers = [
  { name: "Vibhuti Kour", role: "VP - Sales", phone: "+91 7045996309", email: "vibhuti@lacasaarealestate.com", image: vibhutiImg },
  { name: "Gurbani Kour", role: "CEO", phone: "+91 9819970707", email: "gurbani@lacasaarealestate.com", image: gurbaniImg },
  { name: "Sufiyan Shaikh", role: "COO", phone: "+91 7045996309", email: "sufiyan@lacasaarealestate.com", image: sufiyanImg },
  { name: "Kamran Khan", role: "Legal Advisor", phone: "+91 7045996309", email: "kamran@lacasaarealestate.com", image: kamranImg },
  { name: "Vany Arick", role: "HR", phone: "+91 7039357270", email: "vany@lacasaarealestate.com", image: vanyImg },
  { name: "Alok Pal", role: "CFO", phone: "+91 7045996309", email: "alok@lacasaarealestate.com", image: alokImg },
];

export const blogPosts = [
  { id: 1, title: "Mumbai Real Estate Trends 2026", date: "2026-04-01", category: "Market Insights", excerpt: "Explore the latest trends shaping Mumbai's property market this year.", image: gallery1 },
  { id: 2, title: "Investment Guide: Best Areas in Mumbai", date: "2026-03-28", category: "Investment", excerpt: "Discover the top locations for real estate investment in Mumbai.", image: gallery2 },
  { id: 3, title: "Home Loan Tips for First-Time Buyers", date: "2026-03-25", category: "Finance", excerpt: "Essential tips to secure the best home loan rates.", image: gallery3 },
  { id: 4, title: "Luxury Living: What's New in 2026", date: "2026-03-20", category: "Luxury", excerpt: "Latest amenities and features in luxury properties.", image: gallery4 },
  { id: 5, title: "Commercial Real Estate Outlook", date: "2026-03-15", category: "Commercial", excerpt: "Analysis of Mumbai's commercial property sector.", image: gallery5 },
  { id: 6, title: "NRI Investment Guide", date: "2026-03-10", category: "NRI", excerpt: "Complete guide for NRIs investing in Indian real estate.", image: gallery6 },
];

export const faqs = [
  { question: "What documents are required to buy a property?", answer: "You'll need PAN card, Aadhaar card, income proof, bank statements, and property documents." },
  { question: "How long does the property registration process take?", answer: "Typically 2-4 weeks depending on documentation and verification." },
  { question: "Can NRIs buy property in India?", answer: "Yes, NRIs can buy residential and commercial properties in India." },
  { question: "What is the stamp duty in Mumbai?", answer: "Stamp duty in Mumbai is approximately 5-6% of the property value." },
  { question: "Do you help with home loans?", answer: "Yes, we assist with home loan applications from multiple banks." },
];

export const awards = [
  { year: "2025", title: "Best Real Estate Consultant", organization: "Mumbai Realty Awards" },
  { year: "2024", title: "Excellence in Customer Service", organization: "Real Estate Forum" },
  { year: "2023", title: "Top Property Dealer", organization: "India Property Awards" },
  { year: "2022", title: "Best Luxury Property Consultant", organization: "Luxury Realty Awards" },
];

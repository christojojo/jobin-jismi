import dynamic from 'next/dynamic';

// ABOUT
const InnerBanner = dynamic(() => import('@/widgets/InnerBanner'));
const AboutFeatures = dynamic(() => import('@/widgets/AboutFeatures'));
const AboutInnovation = dynamic(() => import('@/widgets/AboutInnovation'));
const AboutMission = dynamic(() => import('@/widgets/AboutMission'));
const AboutDifferentiators = dynamic(() => import('@/widgets/AboutDifferentiators'));
const AboutValues = dynamic(() => import('@/widgets/AboutValues'));
const AboutMilestone = dynamic(() => import('@/widgets/AboutMilestone'));
const AboutResponsibility = dynamic(() => import('@/widgets/AboutResponsibility'));
const AboutPartnership = dynamic(() => import('@/widgets/AboutPartnership'));
const AboutMiniBanner = dynamic(() => import('@/widgets/AboutMiniBanner'));
const AboutContact = dynamic(() => import('@/widgets/AboutContact'));

// CAREER
const CareersOurculture = dynamic(() => import('@/widgets/CareersOurculture'));
const CareerMiniBanner = dynamic(() => import('@/widgets/CareerMiniBanner'));
const CareersSpotlight = dynamic(() => import('@/widgets/CareersSpotlight'));
const CareersTestimonial = dynamic(() => import('@/widgets/CareersTestimonial'));
const CareerRating = dynamic(() => import('@/widgets/CareerRating'));
const CareerDetails = dynamic(() => import('@/widgets/CareerDetails'));

// LEADERSHIP
// const InnerBanner = dynamic(() => import('@/widgets/InnerBanner--'));
const WhoWeAre = dynamic(() => import('@/widgets/WhoWeAre'));
const LeadershipCareers = dynamic(() => import('@/widgets/LeadershipCareers'));

// CONTACT
const ContactFormSec = dynamic(() => import('@/widgets/ContactFormSec'));
const ContactLocation = dynamic(() => import('@/widgets/ContactLocation'));

// INDUSTRY
const IndustryTrends = dynamic(() => import('@/widgets/IndustryTrends'));
const IndustryBenefits = dynamic(() => import('@/widgets/IndustryBenefits'));
const IndustryMigration = dynamic(() => import('@/widgets/IndustryMigration'));
const IndustryTransformation = dynamic(() => import('@/widgets/IndustryTransformation'));


// SERVICE
const SingleBanner = dynamic(() => import('@/widgets/SingleBanner'));
const ServiceAbout = dynamic(() => import('@/widgets/ServiceAbout'));
const ServiceTransformation = dynamic(() => import('@/widgets/ServiceTransformation'));
const ServiceOfferings = dynamic(() => import('@/widgets/ServiceOfferings'));
const ServiceStories = dynamic(() => import('@/widgets/ServiceStories'));
const ServiceWhyApplexus = dynamic(() => import('@/widgets/ServiceWhyApplexus'));
const ServiceConnectUs = dynamic(() => import('@/widgets/ServiceConnectUs'));
const ServiceToolsAndAccelerators = dynamic(() => import('@/widgets/ServiceToolsAndAccelerators'));
const HomeInsight = dynamic(() => import('@/widgets/HomeInsight'));
const ServiceExperts = dynamic(() => import('@/widgets/ServiceExperts'));
const ServiceFaq = dynamic(() => import('@/widgets/ServiceFaq'));
const ServiceRegisterNow = dynamic(() => import('@/widgets/ServiceRegisterNow'));
const ServiceWhyApplexusBlack = dynamic(() => import('@/widgets/ServiceWhyApplexusBlack'));
const ServiceSolvingProblems = dynamic(() => import('@/widgets/ServiceSolvingProblems'));
const ServiceFinanceTransformation = dynamic(() => import('@/widgets/ServiceFinanceTransformation'));
const ServiceTestAutomation = dynamic(() => import('@/widgets/ServiceTestAutomation'));
const ServiceApplicationManagement = dynamic(() => import('@/widgets/ServiceApplicationManagement'));
const ServicesSapCarSolutions = dynamic(() => import('@/widgets/ServicesSapCarSolutions'));
const ServicesCarAddOn = dynamic(() => import('@/widgets/ServicesCarAddOn'));
const ServiceBlueContentBox = dynamic(() => import('@/widgets/ServiceBlueContentBox'));
const ServiceOurOfferings = dynamic(() => import('@/widgets/ServiceOurOfferings'));
const ServiceModApproach = dynamic(() => import('@/widgets/ServiceModApproach'));


// PRODUCTS
const ProductsExportImport = dynamic(() => import('@/widgets/ProductsExportImport'));
const ProductDifferentiators = dynamic(() => import('@/widgets/ProductDifferentiators'));
const HomeSapBanner = dynamic(() => import('@/widgets/HomeSapBanner'));
const HomeTestimonial = dynamic(() => import('@/widgets/HomeTestimonial'));
const ProductsBenefitBusiness = dynamic(() => import('@/widgets/ProductsBenefitBusiness'));
const ProductKeyDeliverables = dynamic(() => import('@/widgets/ProductKeyDeliverables'));
const ProductsDeploymentOffering = dynamic(() => import('@/widgets/ProductsDeploymentOffering'));
const ProductsWhyIris = dynamic(() => import('@/widgets/ProductsWhyIris'));
const IrisProductSolutions = dynamic(() => import('@/widgets/IrisProductSolutions'));
const ProductsIrisExperience = dynamic(() => import('@/widgets/ProductsIrisExperience'));
const ServiceWatchNow = dynamic(() => import('@/widgets/ServiceWatchNow'));
const ProductsCeleritePlatform = dynamic(() => import('@/widgets/ProductsCeleritePlatform'));
const ProductsMigration = dynamic(() => import('@/widgets/ProductsMigration'));
const ProductsSimpleStrips = dynamic(() => import('@/widgets/ProductsSimpleStrips'));
const ProductsRetailSoftware = dynamic(() => import('@/widgets/ProductsRetailSoftware'));
const ProductsKeyFeatures = dynamic(() => import('@/widgets/ProductsKeyFeatures'));
const ProductsRetailers = dynamic(() => import('@/widgets/ProductsRetailers'));

// BLOG
const LatestInsightGrid = dynamic(() => import('@/widgets/LatestInsightGrid'));
const FeaturedCategories = dynamic(() => import('@/widgets/FeaturedCategories'));
const BlogDetail = dynamic(() => import('@/widgets/BlogDetail'));



const DefaultComponent = () => <div>Unknown Widget</div>; // Default component

const setComponent = (widget) => {
  const components = {
    // AboutPage--
    InnerBanner: InnerBanner,
    AboutFeatures: AboutFeatures,
    AboutInnovation: AboutInnovation,
    AboutMission: AboutMission,
    AboutDifferentiators: AboutDifferentiators,
    AboutValues: AboutValues,
    AboutMilestone: AboutMilestone,
    AboutResponsibility: AboutResponsibility,
    AboutPartnership: AboutPartnership,
    AboutMiniBanner: AboutMiniBanner,
    AboutContact: AboutContact,

    // CareerPage--
    CareersOurculture: CareersOurculture,
    CareerMiniBanner: CareerMiniBanner,
    CareersSpotlight: CareersSpotlight,
    CareersTestimonial: CareersTestimonial,
    CareerRating: CareerRating,
    CareerDetails: CareerDetails,


    // Leadership--
    InnerBanner: InnerBanner,
    WhoWeAre: WhoWeAre,
    LeadershipCareers: LeadershipCareers,

    // Contact--
    ContactFormSec: ContactFormSec,
    ContactLocation: ContactLocation,


    // Industry--
    IndustryTrends:IndustryTrends,
    IndustryBenefits:IndustryBenefits,
    IndustryMigration:IndustryMigration,
    IndustryTransformation:IndustryTransformation,


    // ServicePage--
    SingleBanner: SingleBanner,
    ServiceAbout: ServiceAbout,
    ServiceTransformation: ServiceTransformation,
    ServiceOfferings: ServiceOfferings,
    ServiceStories: ServiceStories,
    ServiceWhyApplexus: ServiceWhyApplexus,
    ServiceConnectUs: ServiceConnectUs,
    ServiceToolsAndAccelerators: ServiceToolsAndAccelerators,
    HomeInsight: HomeInsight,
    ServiceExperts: ServiceExperts,
    ServiceFaq: ServiceFaq,
    ServiceRegisterNow: ServiceRegisterNow,
    ServiceWhyApplexusBlack: ServiceWhyApplexusBlack,
    ServiceSolvingProblems: ServiceSolvingProblems,
    ServiceFinanceTransformation: ServiceFinanceTransformation,
    ServiceTestAutomation: ServiceTestAutomation,
    ServiceApplicationManagement: ServiceApplicationManagement,
    ServicesSapCarSolutions: ServicesSapCarSolutions,
    ServicesCarAddOn: ServicesCarAddOn,
    ServiceBlueContentBox: ServiceBlueContentBox,
    ServiceOurOfferings: ServiceOurOfferings,
    ServiceModApproach: ServiceModApproach,

    // ProductsPage--
    ProductsExportImport:ProductsExportImport,
    ProductDifferentiators:ProductDifferentiators,
    HomeSapBanner:HomeSapBanner,
    HomeTestimonial:HomeTestimonial,
    ProductsBenefitBusiness:ProductsBenefitBusiness,
    ProductKeyDeliverables:ProductKeyDeliverables,
    ProductsDeploymentOffering:ProductsDeploymentOffering,
    ProductsWhyIris:ProductsWhyIris,
    IrisProductSolutions:IrisProductSolutions,
    ProductsIrisExperience:ProductsIrisExperience,
    ServiceWatchNow:ServiceWatchNow,
    ProductsCeleritePlatform:ProductsCeleritePlatform,
    ProductsMigration:ProductsMigration,
    ProductsSimpleStrips:ProductsSimpleStrips,
    ProductsRetailSoftware:ProductsRetailSoftware,
    ProductsKeyFeatures:ProductsKeyFeatures,
    ProductsRetailers:ProductsRetailers,

    // BlogPage--
    LatestInsightGrid:LatestInsightGrid,
    FeaturedCategories:FeaturedCategories,
    BlogDetail:BlogDetail,

    // 404 page
    // ErrorPage: ErrorPage,
    // AnotherWidget: AnotherWidget, // Add more components as needed
  };
  return components[widget.widget_type] || DefaultComponent; // Use DefaultComponent if widget_type is unknown
};

const Block = ({ widget }) => {
  const Widget = setComponent(widget);
  return (
    <Widget
      {...widget}
    />
  );
};

export default Block;
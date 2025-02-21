import {
  ActiveUsersIcon,
  AuditIcon,
  FeeChargesIcon,
  FeePricingIcon,
  HandshakeIcon,
  KarmaIcon,
  LoanIcon,
  LoanProductIcon,
  MoneyIcon,
  OrganizationIcon,
  PiggyIcon,
  PreferenceIcon,
  SavingsProductIcon,
  ServiceAccountIcon,
  ServicesIcon,
  SettlementIcon,
  TransactionsIcon,
  UserGuarantorIcon,
  UserIcon,
  UserLoansIcon,
  UsersIcon,
  WhitelistIcon,
} from "../components/ui/icons";
import UserSavingsIcon from "../components/ui/icons/UserSavingsIcon";
import { BioSectionType, User } from "../types/user";

export const customerMenuItems = [
  { label: "Users", icon: <UsersIcon /> },
  { label: "Guarantors", icon: <UserGuarantorIcon /> },
  { label: "Loans", icon: <LoanIcon /> },
  { label: "Decision Models", icon: <HandshakeIcon /> },
  { label: "Savings", icon: <PiggyIcon /> },
  { label: "Loan Requests", icon: <MoneyIcon /> },
  { label: "Whitelist", icon: <WhitelistIcon /> },
  { label: "Karma", icon: <KarmaIcon /> },
];

export const businnessMenuItems = [
  { label: "Organizationn", icon: <OrganizationIcon /> },
  { label: "Loan Products", icon: <LoanProductIcon /> },
  { label: "Savings Products", icon: <SavingsProductIcon /> },
  { label: "Fees and charges", icon: <FeeChargesIcon /> },
  { label: "Transactions", icon: <TransactionsIcon /> },
  { label: "Services", icon: <ServicesIcon /> },
  { label: "Service Account", icon: <ServiceAccountIcon /> },
  { label: "Settlements", icon: <SettlementIcon /> },
];

export const settingMenuItems = [
  { label: "Preferences", icon: <PreferenceIcon /> },
  { label: "Fees and Pricing", icon: <FeePricingIcon /> },
  { label: "Audit Logs", icon: <AuditIcon /> },
];

export const userStatsData = [
  {
    label: "USERS",
    icon: <UserIcon />,
  },
  { label: "ACTIVE USERS", icon: <ActiveUsersIcon /> },
  { label: "USERS WITH LOANS", icon: <UserLoansIcon /> },
  { label: "USERS WITH SAVINGS", icon: <UserSavingsIcon /> },
];

export const userTableHeaders = [
  { title: "ORGANIZATION", hasIcon: true },
  { title: "USERNAME", hasIcon: true },
  { title: "EMAIL", hasIcon: true },
  { title: "PHONE NUMBER", hasIcon: true },
  { title: "DATE JOINED", hasIcon: true },
  { title: "STATUS", hasIcon: true },
];

// export const dummyUsersData: User[] = [
//   {
//     orgName: "Lendsqr",
//     userName: "Haylee19",
//     email: "adedeji@lendsqr.com",
//     phoneNumber: "297.557.0046 x7801",
//     status: STATUS.ACTIVE,
//   },
//   {
//     orgName: "Lendsqr",
//     userName: "Wilburn.Rice",
//     email: "debby2@irorun.com",
//     phoneNumber: "(553) 208-0727 x31321",
//     status: STATUS.INACTIVE,
//   },
//   {
//     orgName: "Lendsqr",
//     userName: "Haylee19",
//     email: "grace@lendstar.com",
//     phoneNumber: "297.557.0046 x7801",
//     status: STATUS.PENDING,
//   },
//   {
//     orgName: "Lendsqr",
//     userName: "Haylee19",
//     email: "tosin@lendsqr.com",
//     phoneNumber: "297.557.0046 x7801",
//     status: STATUS.BLACKLISTED,
//   },
//   {
//     orgName: "Lendsqr",
//     userName: "Haylee19",
//     email: "grace@lendstar.com",
//     phoneNumber: "297.557.0046 x7801",
//     status: STATUS.PENDING,
//   },
//   {
//     orgName: "Lendsqr",
//     userName: "Haylee19",
//     email: "tosin@lendsqr.com",
//     phoneNumber: "297.557.0046 x7801",
//     status: STATUS.INACTIVE,
//   },
//   {
//     orgName: "Lendsqr",
//     userName: "Haylee19",
//     email: "grace@lendstar.com",
//     phoneNumber: "297.557.0046 x7801",
//     status: STATUS.ACTIVE,
//   },
//   {
//     orgName: "Lendsqr",
//     userName: "Haylee19",
//     email: "tosin@lendsqr.com",
//     phoneNumber: "297.557.0046 x7801",
//     status: STATUS.PENDING,
//   },
// ];

export const bioContent: BioSectionType[] = [
  {
    category: "Personal Information",
    content: [
      {
        label: "FULL NAME",
        value: (user: User) => {
          return user.profile.firstName + " " + user.profile.lastName;
        },
      },
      {
        label: "PHONE NUMBER",
        value: (user: User) => {
          return user.phoneNumber;
        },
      },
      {
        label: "EMAIL ADDRESS",
        value: (user: User) => {
          return user.email;
        },
      },

      {
        label: "BVN",
        value: (user: User) => {
          return user.profile.bvn;
        },
      },
      {
        label: "GENDER",
        value: (user: User) => {
          return user.profile.gender;
        },
      },
      {
        label: "MARITAL STATUS",
        value: (user: User) => {
          return "";
        },
      },
      {
        label: "CHILDREN",
        value: (user: User) => {
          return "";
        },
      },
      {
        label: "TYPE OF RESIDENCE",
        value: (user: User) => {
          return "";
        },
      },
    ],
  },
  {
    category: "Education and Employment",
    content: [
      {
        label: "lEVEL OF EDUCATION",
        value: (user: User) => {
          return user.education.level;
        },
      },
      {
        label: "EMPLOYMENT STATUS",
        value: (user: User) => {
          return user.education.employmentStatus;
        },
      },
      {
        label: "SECTOR OF EMPLOYMENT",
        value: (user: User) => {
          return user.education.sector;
        },
      },

      {
        label: "DURATION OF EMPLOYMENT",
        value: (user: User) => {
          return user.education.duration;
        },
      },
      {
        label: "MONTHLY INCOME",
        value: (user: User) => {
          return `₦${user.education.monthlyIncome[0]} - ${user.education.monthlyIncome[1]}`;
        },
      },
      {
        label: "LOAN REPAYMENT",
        value: (user: User) => {
          return "₦" + user.education.loanRepayment;
        },
      },
    ],
  },
  {
    category: "Socials",
    content: [
      {
        label: "TWITTER",
        value: (user: User) => {
          return user.socials.twitter;
        },
      },
      {
        label: "FACEBOOK",
        value: (user: User) => {
          return user.socials.facebook;
        },
      },
      {
        label: "INSTAGRAM",
        value: (user: User) => {
          return user.socials.instagram;
        },
      },
    ],
  },
  {
    category: "Guarantor",
    content: [
      {
        label: "FULL NAME",
        value: (user: User) => {
          return user.guarantor.firstName + " " + user.guarantor.lastName;
        },
      },
      {
        label: "PHONE NUMBER",
        value: (user: User) => {
          return user.guarantor.phoneNumber;
        },
      },
      {
        label: "EMAIL ADDRESS",
        value: (user: User) => {
          return "";
        },
      },
      {
        label: "RELATIONSHIP",
        value: (user: User) => {
          return "";
        },
      },
    ],
  },
  // {
  //   category: "Basic Info",
  //   content: [
  //     {
  //       label: "FULL NAME",
  //     },
  //     {
  //       label: "PHONE NUMBER",
  //     },
  //     {
  //       label: "EMAIL ADDRESS",
  //     },
  //   ],
  // },
];

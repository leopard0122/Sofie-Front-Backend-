export type UsersType = {
  id: string;
  first_name: string;
  last_name: string;
  birthdate: Date;
  gender: string;
};

export type UserPhoneNumberType = {
  id: string;
  user_id: string;
  country_code_id: string;
  phone_number: string;
};

export type UserEmailType = {
  id: string;
  user_id: string;
  email: string;
};

export type UserProfileType = {
  id: string;
  user_id: string;
  have_car_insurance: string;
  why_shop_car_insurance: string;
  no_car_insurance: string;
  have_life_insurance: string;
  why_shop_life_insurance: string;
  why_shop_health_insurance: string;
  no_health_insurance: string;
  when_ready_medical_insurance: string;
  monthly_pretax_income: string;
  current_status_employed_or_self_employed: string;
};

export type UserDeviceType = {
  id: string;
  user_id: string;
  ipv4: string;
  ipv6: string;
  latitude: string;
  longitude: string;
  browser: string;
  isp: string;
  city: string;
  region: string;
  country: string;
  asn: string;
  user_agent: string;
  javascript: string;
  cookie: string;
  screen_resolution: string;
  device_name: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  user_device_id: string;
  suvmitted_at: string;
};

export type UserLifeInsuranceType = {
  id: string;
  user_id: string;
  life_amount_insured_requested: string;
  health_status: string;
  use_nicotine_products: string;
  pre_existing_conditions: string;
};

export type UserHealthInsuranceType = {
  id: string;
  user_id: string;
  type_of_medical_cover: string;
  location_for_cover: string;
  type_of_plan_interested_in: string;
};

export type UserVehiclesType = {
  id: string;
  user_id: string;
  vehicle_year: string;
  vehicle_brand: string;
  vehicle_model: string;
  vehicle_value: string;
  vehicle_status: string;
  vehicle_purpose: string;
  vehicle_insurance: string;
};

export type UserRelativesType = {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  birthdate: Date;
  relationship_type: string;
};

export type ResidenceType = {
  id: string;
  user_id: string;
  current_residency_country_id: string;
};

export type NationalityType = {
  id: string;
  user_id: string;
  nationality_country_id: string;
};

export type InsuranceProviderContactType = {
  id: string;
  insurance_compancy_id: string;
  first_name: string;
  last_name: string;
  tel_contact: string;
  email: string;
};

export type InsuranceCompanyType = {
  id: string;
  country_id: string;
  insurance_comapny: string;
  website: string;
};

export type UserEmploymentType = {
  id: string;
  user_id: string;
  current_employment: string;
  employment_status: string;
  employment_sector: string;
  current_occuptation: string;
};

export type UserBusinessType = {
  id: string;
  user_id: string;
  business_name: string;
  nature_of_business_id_business_sector: string;
  type_of_legal_entity: string;
  monthly_revenue_12_months: string;
  any_existing_loan: string;
  age_of_business: string;
};

export type UserLoanType = {
  id: string;
  user_id: string;
  currently_using_logbook_loan: string;
  type_of_security: string;
};

export type UserGuarantorType = {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  relationship_with_userid: string;
  acceptance_for_loan: string;
  vehicle_year: string;
  vehicle_model: string;
  vehicle_value: string;
  vehicle_status: string;
  vehicle_purpose: string;
  vehicle_insurance: string;
};

export type UserSelfGuaranteeType = {
  id: string;
  user_id: string;
  vehicle_year: string;
  vehicle_brand: string;
  vehicle_model: string;
  vehicle_value: string;
  vehicle_status: string;
  vehicle_purpose: string;
  vehicle_insurance: string;
};

export type BusinessType = {
  id: string;
  business_sector: string;
};

export type ContinentType = {
  id: string;
  continent_name: string;
};

export type CountryType = {
  id: string;
  full_name: string;
  short_name: string;
  nationality: string;
  currency: string;
  currency_symbol: string;
  alpha_3_code: string;
  alpha_2_code: string;
  un_code: string;
  capital_city: string;
  country_code: string;
  timezone: string;
  continent_id: string;
};

export type StateType = {
  id: string;
  country_id: string;
  state_name: string;
};

export type CityType = {
  id: string;
  country_id: string;
  state_id: string;
  city: string;
};

const { buildSchema } = require('graphql')

module.exports = buildSchema(`
      scalar Date
      type AuthUser {
        id: String!
        first_name: String!
        last_name: String!
        email: String!
      }  

      type AuthData {
        token:String!
        user:AuthUser!
        message:String!
      }
      
      input AuthInput {
        email:String!
        password:String!
      }
  
      type User {
        _id: ID!
        first_name: String
        last_name: String
        address: String
        email: String!
        phone: Int
      }
      
      input UserInput {
        first_name: String
        last_name: String
        address: String
        email: String!
        phone: Int
        password: String!
      }
      
      
      type Cost {
        cost: Int
        currency: String
      }
      
      type ExpectedDuration {
        duration: Int
        unit: String
      }
      
      type Location {
      latitude: Float
      longitude: Float
      } 
      
      type Address {
        address_line_1: String
        street: String
        area: String
        landmark: String
        city: String
        state: String
        country: String
        location: Location
      }
      
       type Category {
        category_id: ID
        category_name: String
        category_l1:String
        category_l1_id:String
      }
      
        type Weblinks {
        email:String
        website:String
        facebook:String
        instagram:String
        youtube:String
        twitter:String
      }
      
      type EndingType {
        type:String
      }
      
      type TimeSlot {
        start_time: String
        end_time: String
        start_date: String
        ending_type:EndingType
        repeat_on: [String]
        repeat_every: Int
        repeat_frequency: String
      }
      
      type ExtraService {
        service: String
        cost: String
        currency: String
      }
      
      type KidService {
        service: String
        cost: String
        currency: String
      }
      
      type Service {
        extra_services: [ExtraService]
        kid_services: [KidService]
        pets_allowed: Boolean
      }
      
      type BookingMethod {
        method: String
        contact:String
      }
      
      type Booking {
        booking_requirement: String
        booking_methods : [BookingMethod]
      }
      
      type AcceptedAges {
        min: String
        max: String
      }
      
      type Age {
        accepted_ages: AcceptedAges 
      }
      
      type Documents {
        documents_requirement: [String]
      }
      
      type EquipmentInformation {
        item: String
        provided: Boolean
        cost: String
        currency: String
      }
      
      type DressCodeEquipment {
        dress_code: [String]
        equipment_requirement: String
        equipment_information: [EquipmentInformation]
      }
      
      type Payment {
        payment_method: [String]
      }
      
      type Languages {
        languages_spoken: [String]
      }
      
      type Parking {
        parking_availability: Boolean
        valet_parking: Boolean
      }
      
      type Weather {
        weather_condition_tolerant: Boolean
      }
      
      type Traits {
        services: Service
        booking: Booking
        age: Age
        documents: Documents
        dress_code_equipment: DressCodeEquipment,
        payment: Payment
        languages: Languages
        parking: Parking
        weather: Weather
      }
      type Source {
        address: String
        time_slots: String
        images: String
      }
      
      type Issue {
        impact: String
        field: String
        source: String
        message: String
      }
      
      type Club {
        _id: ID
        activity_id_enc: String
        activity_name: String
        description: String
        visibility: Boolean
        manual_validation_flag: Boolean
        provider_name: String
        provider_id: ID
        branch_name: String
        branch_id: ID
        max_capacity: Int
        cost: Cost
        expected_duration: ExpectedDuration
        address: Address
        category: Category
        weblinks: Weblinks
        images: [String]
        is_visit_flag: Boolean
        type: String
        time_slots: [TimeSlot]
        flags: [String]
        traits: Traits
        source: Source
        ts_create : Date
        ts_update : String
        last_updated_by: Date
        ts_etl_run: Date
        ts_validate: Date
        last_validated_by: String
        system_validation_flag: Boolean
        validity: Boolean
        expired: Boolean
        issues: [Issue]
      }
      
      input CostInput {
        cost: Int
        currency: String
      }
      
      input LocationInput {
      latitude: Float
      longitude: Float
      } 
      
      input AddressInput {
        address_line_1: String
        street: String
        area: String
        landmark: String
        city: String
        state: String
        country: String
        location: LocationInput
      }
      
       input CategoryInput {
        category_id: ID
        category_name: String
        category_l1:String
        category_l1_id:String
      }
      
        input WeblinksInput {
        email:String
        website:String
        facebook:String
        instagram:String
        youtube:String
        twitter:String
      }
      
      input EndingTypeInput {
        type:String
      }
      
      input TimeSlotInput {
        start_time: String
        end_time: String
        start_date: String
        ending_type:EndingTypeInput
        repeat_on: [String]
        repeat_every: Int
        repeat_frequency: String
      }
      
      input ExtraServiceInput {
        service: String
        cost: String
        currency: String
      }
      
      input KidServiceInput {
        service: String
        cost: String
        currency: String
      }
      
      input ServiceInput {
        extra_services: [ExtraServiceInput]
        kid_services: [KidServiceInput]
        pets_allowed: Boolean
      }
      
      input BookingMethodInput {
        method: String
        contact:String
      }
      
      input BookingInput {
        booking_requirement: String
        booking_methods : [BookingMethodInput]
      }
      
      input AcceptedAgesInput {
        min: String
        max: String
      }
      
      input AgeInput {
        accepted_ages: AcceptedAgesInput
      }
      
      input DocumentsInput {
        documents_requirement: [String]
      }
      
      input EquipmentInformationInput {
        item: String
        provided: Boolean
        cost: String
        currency: String
      }
      
      input DressCodeEquipmentInput {
        dress_code: [String]
        equipment_requirement: String
        equipment_information: [EquipmentInformationInput]
      }
      
      input PaymentInput {
        payment_method: [String]
      }
      
      input LanguagesInput {
        languages_spoken: [String]
      }
      
      input ParkingInput {
        parking_availability: Boolean
        valet_parking: Boolean
      }
      input WeatherInput {
        weather_condition_tolerant: Boolean
      }
      
      input TraitsInput {
        services: ServiceInput
        booking: BookingInput
        age: AgeInput
        documents: DocumentsInput
        dress_code_equipment: DressCodeEquipmentInput,
        payment: PaymentInput
        languages: LanguagesInput
        parking: ParkingInput,
        weather: WeatherInput
      }
      input SourceInput {
        address: String
        time_slots: String
        images: String
      }
      
      input IssueInput {
        impact: String
        field: String
        source: String
        message: String
      }
      
       input ExpectedDurationInput {
        duration: Int
        unit: String
      }

      input ClubInput {
        activity_id_enc: String
        activity_name: String
        description: String
        visibility: Boolean
        manual_validation_flag: Boolean
        provider_name: String
        provider_id: ID
        branch_name: String
        branch_id: ID
        max_capacity: Int
        cost: CostInput
        expected_duration: ExpectedDurationInput
        address: AddressInput
        category: CategoryInput
        weblinks: WeblinksInput
        images: [String]
        is_visit_flag: Boolean
        type: String
        time_slots: [TimeSlotInput]
        flags: [String]
        traits: TraitsInput
        source: SourceInput
        ts_create : Date
        ts_update : String
        last_updated_by: Date
        ts_etl_run: Date
        ts_validate: Date
        last_validated_by: String
        system_validation_flag: Boolean
        validity: Boolean
        expired: Boolean
        issues: [IssueInput] 
      }
      
      type deleteResponse {
        message: String
      }
      
      type RootQuery {
        clubs: [Club!]!
        users: [User!]!
        login(authInput: AuthInput): AuthData!
        getClubById(id: String!): Club!
        deleteClubById(id: String!): deleteResponse!
      }

      type RootMutation {
        createClub(clubInput: ClubInput): Club
        registerUser(userInput: UserInput): User
        updateClub(id: String, clubUpdateInput: ClubInput): Club
      }

      schema {
        query: RootQuery 
        mutation: RootMutation
      }
  `)

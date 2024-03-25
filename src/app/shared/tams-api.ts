/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AccountDetailsInputModel {
  /** @format int32 */
  serviceProviderGroupSupplierTerms?: number | null;
  serviceProviderGroupAccountNumber?: string | null;
  serviceProviderGroupIsContraAccount?: boolean;
  /** @format int32 */
  serviceProviderGroupContractCustomerGroupId?: number;
  serviceProviderGroupBankName?: string | null;
  serviceProviderGroupBankSortCode1?: string | null;
  serviceProviderGroupBankSortCode2?: string | null;
  serviceProviderGroupBankSortCode3?: string | null;
  serviceProviderGroupBankAccountNo?: string | null;
}

export interface AccountsCashBook {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  paymentOrReceiptDate?: string | null;
  postingType?: string | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  supplierLocId?: number | null;
  /** @format double */
  grossValue?: number | null;
  chequeNo?: string | null;
  reference?: string | null;
  /** @format date-time */
  bankedDate?: string | null;
  isContra?: boolean | null;
  isUnallocatedPaid?: boolean | null;
  customerLocation?: CustomerLocation;
  serviceProviderLocation?: ServiceProviderLocation;
  serviceRequestHeader?: ServiceRequestHeader;
}

export interface AccountsCashBookTest {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  paymentOrReceiptDate?: string | null;
  postingType?: string | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  supplierLocId?: number | null;
  /** @format double */
  grossValue?: number | null;
  /** @format double */
  balance?: number | null;
  chequeNo?: string | null;
  reference?: string | null;
  /** @format date-time */
  bankedDate?: string | null;
  isContra?: boolean | null;
  isUnallocatedPaid?: boolean | null;
  customerLocation?: CustomerLocation;
  serviceProviderLocation?: ServiceProviderLocation;
  serviceRequestHeader?: ServiceRequestHeader;
  accountsPurchasePrePayments?: AccountsPurchasePrePayments[] | null;
}

export interface AccountsNominalCode {
  /** @format int32 */
  nominalSubGroupId?: number | null;
  /** @format int32 */
  nominalCodeId?: number;
  nominalCodeDescription?: string | null;
  /** @format int32 */
  bankAccountNumber?: number | null;
}

export interface AccountsNominalLedger {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  postingDate?: string | null;
  /** @format date-time */
  bankedDate?: string | null;
  /** @format int32 */
  nominalCode?: number | null;
  /** @format double */
  value?: number | null;
  /** @format int32 */
  salesLedgerLineId?: number | null;
  postingDescription?: string | null;
  /** @format int32 */
  purchaseLedgerLineId?: number | null;
  /** @format int32 */
  cashBookLineId?: number | null;
  flagIt?: boolean | null;
  journalReferenceId?: string | null;
  /** @format int32 */
  periodId?: number | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  supplierGroupId?: number | null;
  accountsSalesLedger?: AccountsSalesLedger;
  accountsPurchaseLedger?: AccountsPurchaseLedger;
  accountsPurchaseLedgerTest?: AccountsPurchaseLedgerTest;
  accountsNominalCode?: AccountsNominalCode;
}

export interface AccountsPurchaseLedger {
  /** @format int32 */
  id?: number;
  postingType?: string | null;
  /** @format date-time */
  postingDate?: string | null;
  /** @format int32 */
  departmentId?: number | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  nominalCodeId?: number;
  /** @format int32 */
  supplierLocId?: number | null;
  /** @format double */
  netValue?: number | null;
  /** @format double */
  vatValue?: number | null;
  reference?: string | null;
  sysGenUniqueReference?: string | null;
  /** @format date-time */
  purchaseInvoiceDate?: string | null;
  purchaseInvoiceNo?: string | null;
  purchaseInvoiceReceived?: boolean | null;
  /** @format date-time */
  purchaseInvoiceReceivedDate?: string | null;
  purchaseInvoiceAccepted?: boolean | null;
  /** @format date-time */
  purchaseInvoiceAcceptedDate?: string | null;
  /** @format int32 */
  purchaseInvoiceAcceptedUserId?: number | null;
  purchaseInvoiceInQuery?: boolean | null;
  /** @format int32 */
  purchaseInvoiceQueryUserId?: number | null;
  /** @format int32 */
  purchaseInvoiceQueryReasonId?: number | null;
  /** @format int32 */
  purchaseInvoiceQueryReasonId2?: number | null;
  /** @format int32 */
  purchaseInvoiceQueryReasonId3?: number | null;
  /** @format int32 */
  purchaseInvoiceQueryReasonId4?: number | null;
  purchaseInvoiceQueryFreeText?: string | null;
  /** @format double */
  purchaseInvoiceQueryExpectedCreditValue?: number | null;
  /** @format date-time */
  oldPostingDate?: string | null;
  selfBillingIsSelfBillingInvoice?: boolean | null;
  selfBillingInQuery?: boolean | null;
  selfBillingIsQueryResolved?: boolean | null;
  selfBillingQuery?: string | null;
  /** @format date-time */
  selfBillingQueryDate?: string | null;
  isReconciled?: boolean | null;
  lastPostedBy?: string | null;
  /** @format int32 */
  oldPlNo?: number | null;
  forArchive?: boolean | null;
  /** @format int32 */
  periodId?: number | null;
  /** @format int32 */
  filingRef?: number | null;
  serviceProviderLocation?: ServiceProviderLocation;
  accountsNominalLedger?: AccountsNominalLedger[] | null;
  accountsPurchaseLedgerPayments?: AccountsPurchaseLedgerPayment[] | null;
  serviceRequestHeader?: ServiceRequestHeader;
}

export interface AccountsPurchaseLedgerPayment {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  purchaseLedgerLineId?: number | null;
  /** @format date-time */
  paymentDate?: string | null;
  paymentChequeNo?: string | null;
  /** @format double */
  paymentGross?: number | null;
  /** @format int32 */
  paymentUserId?: number | null;
  /** @format date-time */
  paymentBankedDate?: string | null;
  paymentReference?: string | null;
  forArchive?: boolean | null;
  /** @format int32 */
  cashBookId?: number | null;
  accountsPurchaseLedger?: AccountsPurchaseLedger;
  accountsPurchaseLedgerTest?: AccountsPurchaseLedgerTest;
  userInformation?: UserInformation;
}

export interface AccountsPurchaseLedgerTest {
  /** @format int32 */
  id?: number;
  postingType?: string | null;
  /** @format date-time */
  postingDate?: string | null;
  /** @format int32 */
  departmentId?: number | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  nominalCodeId?: number;
  /** @format int32 */
  supplierLocId?: number | null;
  /** @format double */
  netValue?: number | null;
  /** @format double */
  vatValue?: number | null;
  /** @format double */
  balance?: number | null;
  reference?: string | null;
  sysGenUniqueReference?: string | null;
  /** @format date-time */
  purchaseInvoiceDate?: string | null;
  purchaseInvoiceNo?: string | null;
  purchaseInvoiceReceived?: boolean | null;
  /** @format date-time */
  purchaseInvoiceReceivedDate?: string | null;
  purchaseInvoiceAccepted?: boolean | null;
  /** @format date-time */
  purchaseInvoiceAcceptedDate?: string | null;
  /** @format int32 */
  purchaseInvoiceAcceptedUserId?: number | null;
  purchaseInvoiceInQuery?: boolean | null;
  /** @format int32 */
  purchaseInvoiceQueryUserId?: number | null;
  /** @format int32 */
  purchaseInvoiceQueryReasonId?: number | null;
  /** @format int32 */
  purchaseInvoiceQueryReasonId2?: number | null;
  /** @format int32 */
  purchaseInvoiceQueryReasonId3?: number | null;
  /** @format int32 */
  purchaseInvoiceQueryReasonId4?: number | null;
  purchaseInvoiceQueryFreeText?: string | null;
  /** @format double */
  purchaseInvoiceQueryExpectedCreditValue?: number | null;
  /** @format date-time */
  oldPostingDate?: string | null;
  selfBillingIsSelfBillingInvoice?: boolean | null;
  selfBillingInQuery?: boolean | null;
  selfBillingIsQueryResolved?: boolean | null;
  selfBillingQuery?: string | null;
  /** @format date-time */
  selfBillingQueryDate?: string | null;
  isReconciled?: boolean | null;
  lastPostedBy?: string | null;
  /** @format int32 */
  oldPlNo?: number | null;
  forArchive?: boolean | null;
  /** @format int32 */
  periodId?: number | null;
  /** @format int32 */
  filingRef?: number | null;
  serviceProviderLocation?: ServiceProviderLocation;
  accountsNominalLedger?: AccountsNominalLedger[] | null;
  accountsPurchaseLedgerPayments?: AccountsPurchaseLedgerPayment[] | null;
  accountsPurchasePrePayments?: AccountsPurchasePrePayments[] | null;
  serviceRequestHeader?: ServiceRequestHeader;
}

export interface AccountsPurchasePrePayments {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  prePayID?: number;
  /** @format int32 */
  purchaseLedgerLineId?: number | null;
  /** @format int32 */
  cashbookID?: number | null;
  /** @format double */
  paymentAmount?: number;
  /** @format date-time */
  paymentDueDate?: string;
  /** @format int32 */
  bacsCreated?: number;
  prepaymentStatusHistorys?: PrepaymentStatusHistory[] | null;
  accountsPurchaseLedger?: AccountsPurchaseLedger;
  accountsPurchaseLedgerTest?: AccountsPurchaseLedgerTest;
  accountsCashBookTest?: AccountsCashBookTest;
}

export interface AccountsSalesLedger {
  /** @format int32 */
  id?: number;
  postingType?: string | null;
  /** @format date-time */
  postingDate?: string | null;
  /** @format date-time */
  periodAllocationDate?: string | null;
  /** @format int32 */
  nominalCodeId?: number;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format double */
  netValue?: number | null;
  /** @format double */
  vatValue?: number | null;
  /** @format double */
  vatRate?: number | null;
  reference?: string | null;
  creditComments?: string | null;
  isInQuery?: boolean | null;
  isReconciled?: boolean | null;
  forArchive?: boolean | null;
  /** @format int32 */
  periodId?: number | null;
  customerLocation?: CustomerLocation;
  accountsNominalLedger?: AccountsNominalLedger[] | null;
  accountsSalesLedgerPayments?: AccountsSalesLedgerPayment[] | null;
  serviceRequestHeader?: ServiceRequestHeader;
}

export interface AccountsSalesLedgerPayment {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  salesLedgerLineId?: number | null;
  /** @format date-time */
  paymentDate?: string | null;
  paymentChequeNo?: string | null;
  /** @format double */
  paymentGross?: number | null;
  /** @format int32 */
  paymentUserId?: number | null;
  /** @format date-time */
  paymentBankedDate?: string | null;
  paymentReference?: string | null;
  forArchive?: boolean | null;
  /** @format int32 */
  cashBookId?: number | null;
  accountsSalesLedger?: AccountsSalesLedger;
  userInformation?: UserInformation;
}

export interface AddPartWornStockInputModel {
  /** @format int32 */
  customerGroupId?: number;
  /** @format int32 */
  serviceProviderLocId?: number;
  productSizeShort?: string | null;
  /** @format int32 */
  productMake?: number | null;
  productNewRem?: string | null;
  removalReason?: string | null;
  /** @format float */
  removalTread?: number | null;
  serialNo?: string | null;
}

export interface AddToPartWornStockRequest {
  /** @format int32 */
  customerGroupId?: number;
  /** @format int32 */
  serviceProviderLocationId?: number;
  productSizeShort?: string | null;
  /** @format int32 */
  productMake?: number;
  construction?: string | null;
  removalReason?: string | null;
  /** @format float */
  removalTread?: number;
  serialNo?: string | null;
}

export interface AdjustCustomerOrderNumberInputModel {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  newOrderNumber?: string | null;
}

export interface AuthenticationRequest {
  /** @minLength 1 */
  userName: string;
  /** @minLength 1 */
  password: string;
}

export interface AxleChangeInputModel {
  /** @format int32 */
  serviceRequestLineId?: number;
  newAxlePosition?: string | null;
}

export interface BreakdownListViewModel {
  icSrRef?: string | null;
  vehicle?: string | null;
  customer?: string | null;
  category?: string | null;
  /** @format date-time */
  icDateTime?: string;
  /** @format date-time */
  deployed?: string;
  /** @format date-time */
  eta?: string | null;
  etaStatus?: string | null;
  /** @format date-time */
  toa?: string | null;
  /** @format date-time */
  toc?: string | null;
  serviceProvider?: string | null;
  /** @format date-time */
  deployedDate?: string | null;
  /** @format date-time */
  deployedTime?: string | null;
  /** @format int32 */
  etaMinutes?: number | null;
}

export interface BreakdownListViewModelPagedResultViewModel {
  items?: BreakdownListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CCPCasingAdviceNoteHeaderDetailViewModel {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number;
  /** @format date-time */
  casingAdviceNoteDate?: string | null;
  serviceProviderLocName?: string | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  /** @format date-time */
  casingAdviceNoteCollectedByAgencyDate?: string | null;
  /** @format date-time */
  casingAdviceNoteAuditedDate?: string | null;
  /** @format int32 */
  serviceRequestNum?: number;
  casingAdviceNoteLines?: CCPCasingAdviceNoteLineDetailViewModel[] | null;
  casingAdviceNoteCollectionAgency?: CCPProductMakeDetailViewModel;
}

export interface CCPCasingAdviceNoteLineDetailViewModel {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number | null;
  /** @format int32 */
  casingAdviceNoteLineId?: number;
  casingReviewed?: boolean | null;
  /** @format date-time */
  casingReviewDate?: string | null;
  /** @format date-time */
  casingQueryResolvedDate?: string | null;
  /** @format int32 */
  casingReviewResultId?: number | null;
  /** @format double */
  casingCreditValue?: number | null;
  serviceRequestLine?: CCPServiceRequestLineDetailViewModel;
  casingReviewResult?: CCPCasingReviewResultDetailViewModel;
}

export interface CCPCasingAuditResultInputModel {
  /** @format int32 */
  casingAdviceNoteLineId?: number;
  /** @format int32 */
  casingReviewResultId?: number;
  /** @format double */
  casingCreditValue?: number;
}

export interface CCPCasingCollectionInputModel {
  /** @format date-time */
  dateCollected?: string;
}

export interface CCPCasingCollectionRequestDetailViewModel {
  /** @format int32 */
  casingCollectionRequestId?: number;
  /** @format date-time */
  casingCollectionRequestDate?: string | null;
  casingCollectionRequestContactName?: string | null;
  casingCollectionRequestContactNumber?: string | null;
  casingCollectionRequestCanRef?: string | null;
  /** @format int32 */
  casingCollectionRequestQuantity?: number | null;
  casingCollectionRequestRef?: string | null;
  /** @format date-time */
  casingCollectionRequestCollectionDate?: string | null;
  casingCollectionRequestReview?: string | null;
  serviceProviderName?: string | null;
  serviceProviderLocationName?: string | null;
}

export interface CCPCasingCollectionRequestDetailViewModelPagedResultViewModel {
  items?: CCPCasingCollectionRequestDetailViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CCPCasingReviewResultDetailViewModel {
  /** @format int32 */
  casingReviewResultId?: number;
  casingReviewResultDescription?: string | null;
}

export interface CCPCasingsListViewModel {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number;
  /** @format int32 */
  casingAdviceNoteCollectionAgencyId?: number | null;
  serviceProviderLocName?: string | null;
  /** @format date-time */
  casingAdviceNoteDate?: string | null;
  casingAdviceNoteAudited?: boolean | null;
  casingAdviceNoteCollectedByAgency?: boolean | null;
  /** @format date-time */
  casingAdviceNoteCollectedByAgencyDate?: string | null;
  serviceProviderLocPostcode1?: string | null;
  serviceProviderLocPostcode2?: string | null;
  /** @format int32 */
  casingAdviceNoteLineCount?: number;
}

export interface CCPCasingsListViewModelPagedResultViewModel {
  items?: CCPCasingsListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CCPCustomerLocationDetailViewModel {
  customerLocName?: string | null;
}

export interface CCPDashboardCountViewModel {
  /** @format int32 */
  casingsAwaitingCollection?: number;
  /** @format int32 */
  casingsReadyForAudit?: number;
}

export interface CCPPServiceRequestHeaderDetailViewModel {
  /** @format date-time */
  initialRequestDate?: string | null;
  /** @format date-time */
  signOffDate?: string | null;
  customerLocation?: CCPCustomerLocationDetailViewModel;
}

export interface CCPProductDetailViewModel {
  /** @format int32 */
  productMake?: number | null;
  productSizeShort?: string | null;
  productMakeObj?: CCPProductMakeDetailViewModel;
}

export interface CCPProductMakeDetailViewModel {
  /** @format int32 */
  productMake1?: number | null;
  productMakeDescription?: string | null;
}

export interface CCPServiceRequestLineDetailViewModel {
  /** @format int32 */
  serviceRequestLineId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  serialOff?: string | null;
  /** @format float */
  removalTread?: number | null;
  removalReason?: string | null;
  /** @format int32 */
  removalManufacturer?: number | null;
  removalNew?: string | null;
  product?: CCPProductDetailViewModel;
  removalMake?: CCPProductMakeDetailViewModel;
  serviceRequestHeader?: CCPPServiceRequestHeaderDetailViewModel;
}

export interface CPJobItemViewModel {
  positionCode?: string | null;
  axlePos?: string | null;
  tyreSize?: string | null;
  removalReason?: RemovalReason;
}

export interface CPJobsListViewModel {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format int32 */
  customerFleetListId?: number | null;
  initialCallerName?: string | null;
  initialCallerTel?: string | null;
  initialOrderNo?: string | null;
  initialTrailerId?: string | null;
  initialVehicleLocation?: string | null;
  initialVehicleDestination?: string | null;
  initialLocationCategory?: string | null;
  initialRequestSummary?: string | null;
  /** @format int32 */
  initialVehicleAvailability?: number | null;
  initialRequestType?: string | null;
  /** @format date-time */
  initialRequestDate?: string | null;
  /** @format date-time */
  initialRequestTime?: string | null;
  deployedIsDeployed?: boolean | null;
  /** @format int32 */
  deployedServiceLocEta?: number | null;
  /** @format date-time */
  deployedServiceLocToa?: string | null;
  /** @format date-time */
  deployedServiceLocDoa?: string | null;
  /** @format date-time */
  deployedServiceLocToc?: string | null;
  /** @format date-time */
  deployedServiceLocDoc?: string | null;
  requestCancelled?: boolean | null;
  /** @format date-time */
  etabefore?: string | null;
  /** @format date-time */
  updatedEta?: string | null;
  /** @format int32 */
  etaMinutes?: number | null;
  maxEtaTime?: TimeSpan;
  initialRequestUserName?: string | null;
  vehicleAxleConfigDescription?: string | null;
  vehicleReg?: string | null;
  vehicleAvailability?: string | null;
  /** @format date-time */
  eta?: string | null;
  customerJobNumber?: string | null;
  isFrozen?: boolean | null;
  agreedDeployCallout?: string | null;
}

export interface CPJobsListViewModelPagedResultViewModel {
  items?: CPJobsListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CPServiceRequestViewModel {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format int32 */
  serviceRequestGroupId?: number | null;
  authorisationType?: string | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  customerFleetListId?: number | null;
  initialCallerName?: string | null;
  initialCallerTel?: string | null;
  initialOrderNo?: string | null;
  initialTrailerId?: string | null;
  initialVehicleLocation?: string | null;
  initialVehicleDestination?: string | null;
  initialLocationCategory?: string | null;
  initialRequestSummary?: string | null;
  /** @format int32 */
  initialVehicleAvailability?: number | null;
  initialRequestType?: string | null;
  /** @format date-time */
  initialRequestDate?: string | null;
  /** @format date-time */
  initialRequestTime?: string | null;
  /** @format int32 */
  initialRequestUserId?: number | null;
  initialThirdPartyCustomerName?: string | null;
  deployedIsDeployed?: boolean | null;
  /** @format int32 */
  deployedServiceLocId?: number | null;
  /** @format int32 */
  deployedServiceLocEta?: number | null;
  /** @format date-time */
  deployedServiceLocToa?: string | null;
  /** @format date-time */
  deployedServiceLocDoa?: string | null;
  /** @format date-time */
  deployedServiceLocToc?: string | null;
  /** @format date-time */
  deployedServiceLocDoc?: string | null;
  /** @format int32 */
  deployedAgreedMake?: number | null;
  supplierJobRef?: string | null;
  /** @format int32 */
  deployedUserId?: number | null;
  deployedUserName?: string | null;
  /** @format date-time */
  deployedDate?: string | null;
  /** @format date-time */
  deployedTime?: string | null;
  deployedFitterMobileNo?: string | null;
  signOffSignedOff?: boolean | null;
  /** @format int32 */
  signOffUserId?: number | null;
  signOffUserName?: string | null;
  /** @format date-time */
  signOffDate?: string | null;
  /** @format date-time */
  signOffTime?: string | null;
  requestCancelled?: boolean | null;
  vehicleTacho?: string | null;
  spAwaitingSignoff?: boolean | null;
  spSignedOff?: boolean | null;
  /** @format date-time */
  spSignOffDate?: string | null;
  /** @format date-time */
  spSignOffTime?: string | null;
  policyTyresFitted?: boolean | null;
  /** @format date-time */
  prebookedDate?: string | null;
  isLegal?: boolean | null;
  /** @format int32 */
  tyresRequested?: number | null;
  tyreType?: string | null;
  /** @format date-time */
  etabefore?: string | null;
  /** @format date-time */
  updatedEta?: string | null;
  /** @format int32 */
  etaMinutes?: number | null;
  maxEtaTime?: TimeSpan;
  customerGroupName?: string | null;
  customerGroup?: CustomerGroup;
  customerLocName?: string | null;
  /** @format int32 */
  customerLocServiceProviderLocId?: number;
  serviceProviderLocCounty?: string | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  serviceProviderLocName?: string | null;
  serviceProviderLocTelephone?: string | null;
  serviceProviderGroupName?: string | null;
  initialRequestUserName?: string | null;
  vehicleAxleConfigDescription?: string | null;
  vehicleReg?: string | null;
  vehicleAvailability?: string | null;
  /** @format date-time */
  eta?: string | null;
  agreedMakeName?: string | null;
  customerJobNumber?: string | null;
  isFrozen?: boolean | null;
  agreedDeployCallout?: string | null;
  geolocationGUID?: string | null;
  geolocation?: GeographyGeolocation;
  vehicleClassification?: string | null;
  jobItems?: CPJobItemViewModel[] | null;
  vehicleDetails?: CpVehicleViewModel;
}

export interface CashBookListViewModel {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  paymentOrReceiptDate?: string | null;
  postingType?: string | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  supplierLocId?: number | null;
  /** @format double */
  grossValue?: number | null;
  chequeNo?: string | null;
  reference?: string | null;
  /** @format date-time */
  bankedDate?: string | null;
  isContra?: boolean | null;
  isUnallocatedPaid?: boolean | null;
  /** @format int32 */
  customerGroupId?: number | null;
}

export interface CashBookListViewModelPagedResultViewModel {
  items?: CashBookListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CashBookViewModel {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  paymentOrReceiptDate?: string | null;
  postingType?: string | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  supplierLocId?: number | null;
  /** @format double */
  grossValue?: number | null;
  chequeNo?: string | null;
  reference?: string | null;
  /** @format date-time */
  bankedDate?: string | null;
  isContra?: boolean | null;
  isUnallocatedPaid?: boolean | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  /** @format int32 */
  accountsSalesLedgerId?: number | null;
}

export interface CasingAdviceNoteDetailViewModel {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number;
  /** @format date-time */
  casingAdviceNoteDate?: string | null;
  serviceProviderLocId?: string | null;
  serviceProviderLocName?: string | null;
  serviceProviderGroupId?: string | null;
  serviceProviderLocAddress1?: string | null;
  serviceProviderLocAddress2?: string | null;
  serviceProviderLocAddress3?: string | null;
  serviceProviderLocAddress4?: string | null;
  serviceProviderLocCounty?: string | null;
  serviceProviderLocPostcode1?: string | null;
  serviceProviderLocPostcode2?: string | null;
  serviceProviderLocCountry?: string | null;
  casingAdviceNoteCollectionAgencyName?: string | null;
  /** @format date-time */
  casingAdviceNoteCollectedByAgencyDate?: string | null;
  /** @format date-time */
  casingAdviceNoteAuditedDate?: string | null;
  casingAuditReviewResult?: string | null;
  casingAdviceNoteLines?: CasingAdviceNoteLineDetailViewModel[] | null;
}

export interface CasingAdviceNoteHeader {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number;
  /** @format date-time */
  casingAdviceNoteDate?: string | null;
  /** @format date-time */
  casingAdviceNoteTime?: string | null;
  /** @format int32 */
  casingAdviceNoteCollectionAgencyId?: number | null;
  casingAdviceNoteCollectedByAgency?: boolean | null;
  /** @format date-time */
  casingAdviceNoteCollectedByAgencyDate?: string | null;
  casingAdviceNoteAudited?: boolean | null;
  /** @format date-time */
  casingAdviceNoteAuditedDate?: string | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  serviceProviderLocation?: ServiceProviderLocation;
  casingAdviceNoteCollectionAgency?: ProductMake;
  casingAdviceNoteLines?: CasingAdviceNoteLine[] | null;
}

export interface CasingAdviceNoteInputModel {
  /** @format int32 */
  collectionAgency?: number;
  serviceRequestLineIDs?: number[] | null;
}

export interface CasingAdviceNoteLine {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number | null;
  /** @format int32 */
  casingAdviceNoteLineId?: number;
  casingReviewed?: boolean | null;
  /** @format int32 */
  casingReviewResultId?: number | null;
  /** @format date-time */
  casingReviewDate?: string | null;
  /** @format double */
  casingCreditValue?: number | null;
  /** @format date-time */
  casingQueryResolvedDate?: string | null;
  /** @format int32 */
  casingQueryResolvedBy?: number | null;
  serviceRequestLine?: ServiceRequestLine;
  casingAdviceNoteHeader?: CasingAdviceNoteHeader;
  casingReviewResult?: CasingReviewResult;
}

export interface CasingAdviceNoteLineDetailViewModel {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number;
  /** @format double */
  casingCreditValue?: number | null;
  serviceRequestLine?: ServiceRequestLineDetailViewModel;
  casingReviewResult?: CasingReviewResult;
}

export interface CasingAdviceNoteListViewModel {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number;
  serviceProviderLocName?: string | null;
  /** @format date-time */
  casingAdviceNoteDate?: string | null;
  /** @format int32 */
  serviceRequestNum?: number;
}

export interface CasingAdviceNoteListViewModelPagedResultViewModel {
  items?: CasingAdviceNoteListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CasingCollectionAgencyListViewModel {
  /** @format int32 */
  productMake?: number;
  productMakeDescription?: string | null;
}

export interface CasingCollectionAgencyListViewModelPagedResultViewModel {
  items?: CasingCollectionAgencyListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CasingCollectionRequest {
  /** @format int32 */
  casingCollectionRequestId?: number;
  /** @format date-time */
  casingCollectionRequestDate?: string | null;
  /** @format int32 */
  casingCollectionRequestServiceProvider?: number | null;
  /** @format int32 */
  casingCollectionRequestServiceProviderLocation?: number | null;
  casingCollectionRequestContactName?: string | null;
  casingCollectionRequestContactNumber?: string | null;
  casingCollectionRequestCanRef?: string | null;
  /** @format int32 */
  casingCollectionRequestQuantity?: number | null;
  casingCollectionRequestRef?: string | null;
  casingCollectionRequestTimeStamp?: string | null;
  /** @format int32 */
  casingCollectionRequestProductMakeId?: number | null;
  /** @format date-time */
  casingCollectionRequestCollectionDate?: string | null;
  casingCollectionRequestReview?: string | null;
  serviceProviderGroup?: ServiceProviderGroup;
  serviceProviderLocation?: ServiceProviderLocation;
  casingCollectionAgency?: ProductMake;
}

export interface CasingCollectionUser {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  casingCollectionManufId?: number | null;
  casingCollectionUsername?: string | null;
  casingCollectionPassword?: string | null;
  /** @format int32 */
  loginCount?: number | null;
  /** @format date-time */
  lastLoginDate?: string | null;
  /** @format date-time */
  lastLoginTime?: string | null;
  userGuid?: string | null;
  /** @format date-time */
  lastAccess?: string | null;
  casingCollectionManufacturer?: ProductMake;
}

export interface CasingReviewResult {
  /** @format int32 */
  casingReviewResultId?: number;
  casingReviewResultDescription?: string | null;
}

export interface CasingsAwaitingCollectionListViewModel {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format int32 */
  serviceRequestLineId?: number;
  /** @format date-time */
  signOffDate?: string | null;
  customerLocName?: string | null;
  productSizeShort?: string | null;
  productMakeDescription?: string | null;
  removalNew?: string | null;
  /** @format float */
  removalTread?: number | null;
  serialOff?: string | null;
  removalReason?: string | null;
}

export interface CasingsAwaitingCollectionListViewModelPagedResultViewModel {
  items?: CasingsAwaitingCollectionListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ChangePasswordModel {
  oldPassword?: string | null;
  newPassword?: string | null;
  newPasswordConfirmation?: string | null;
}

export interface CommentTypes {
  /** @format int32 */
  id?: number;
  description?: string | null;
  comments?: Comments[] | null;
}

export interface CommentTypesIEnumerablePagedResultViewModel {
  items?: CommentTypes[][] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface Comments {
  /** @format int32 */
  id?: number;
  comment?: string | null;
  /** @format int32 */
  commentTypeId?: number;
  internalOnly?: boolean;
  /** @format date-time */
  dateTimePosted?: string;
  /** @format int32 */
  postedByUserId?: number;
  /** @format date-time */
  dateTimeLastEdited?: string | null;
  /** @format int32 */
  lastEditedByUserId?: number | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  /** @format int32 */
  salesLedgerId?: number | null;
  /** @format int32 */
  purchaseLedgerId?: number | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  commentTypes?: CommentTypes;
  userInformationPostedBy?: UserInformation;
  userInformationEditedBy?: UserInformation;
  customerGroup?: CustomerGroup;
  serviceProviderGroup?: ServiceProviderGroup;
}

export interface CommentsViewModel {
  /** @format int32 */
  id?: number;
  comment?: string | null;
  commentType?: string | null;
  /** @format date-time */
  dateTimePosted?: string;
  postedByUserName?: string | null;
  /** @format date-time */
  dateTimeLastEdited?: string | null;
  lastEditedByUserName?: string | null;
  /** @format int32 */
  commentSourceId?: number;
  /** @format int32 */
  customerGroupId?: number | null;
  customerGroupName?: string | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  salesLedgerId?: number | null;
  /** @format int32 */
  purchaseLedgerId?: number | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  serviceProviderGroupName?: string | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  internalOnly?: boolean;
}

export interface CommentsViewModelPagedResultViewModel {
  items?: CommentsViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface Contact {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  title?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  faxNumber?: string | null;
  department?: string | null;
  usedForStatement?: boolean;
  usedForInvoice?: boolean;
  usedForRequestingPO?: boolean;
  /** @format int32 */
  emailErrorCount?: number;
  emailErrorMessage?: string | null;
  primaryContact?: boolean;
  secondaryContact?: boolean;
  /** @format int32 */
  createdById?: number;
  /** @format date-time */
  createdDate?: string;
  /** @format int32 */
  lastUpdatedBy?: number | null;
  /** @format date-time */
  lastUpdatedDate?: string | null;
  isDeleted?: boolean;
  customerGroup?: CustomerGroup;
  contactLocations?: ContactLocation[] | null;
  customerSLAKeyContacts?: CustomerSLAKeyContact[] | null;
}

export interface ContactInputModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  title?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  faxNumber?: string | null;
  department?: string | null;
  usedForStatement?: boolean;
  usedForInvoice?: boolean;
  usedForRequestingPO?: boolean;
  /** @format int32 */
  emailErrorCount?: number;
  emailErrorMessage?: string | null;
  primaryContact?: boolean;
  secondaryContact?: boolean;
  /** @format int32 */
  createdById?: number;
  /** @format date-time */
  createdDate?: string;
  /** @format int32 */
  lastUpdatedBy?: number | null;
  /** @format date-time */
  lastUpdatedDate?: string | null;
}

export interface ContactLocation {
  /** @format int32 */
  contactId?: number;
  /** @format int32 */
  customerLocationId?: number;
  contact?: Contact;
  customerLocation?: CustomerLocation;
}

export interface CpServiceRequestLineViewModel {
  axlePos?: string | null;
  description?: string | null;
  /** @format float */
  quantity?: number | null;
  /** @format double */
  unitPrice?: number | null;
  serialOn?: string | null;
  productRef?: string | null;
  positionCode?: string | null;
  serialOff?: string | null;
  /** @format int32 */
  removalDestination?: number | null;
  /** @format float */
  removalTread?: number | null;
  /** @format int32 */
  removalManufacturer?: number | null;
  removalNew?: string | null;
  removalReason?: string | null;
  dotCode?: string | null;
  /** @format int32 */
  pwSourceId?: number | null;
  retorqueSerialNo?: string | null;
  productGroupDescription?: string | null;
  /** @format int32 */
  productGroup?: number | null;
  productGroupType?: string | null;
  /** @format int32 */
  serviceRequestLineId?: number;
  product?: Product;
}

export interface CpVehicleViewModel {
  /** @format int32 */
  customerFleetListId?: number;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  customerFleetlistVehicleReg?: string | null;
  customerFleetlistActive?: boolean | null;
  /** @format date-time */
  customerFleetlistDefleetDate?: string | null;
  /** @format int32 */
  vehicleManufacturerId?: number | null;
  /** @format int32 */
  vehicleModelId?: number | null;
  vehicleAxleConfigShort?: string | null;
  /** @format int32 */
  vehicleOperationTypeId?: number | null;
  /** @format date-time */
  dateAddedToFleetList?: string | null;
  axleATyreSizeShort?: string | null;
  axleBTyreSizeShort?: string | null;
  axleCTyreSizeShort?: string | null;
  axleDTyreSizeShort?: string | null;
  axleETyreSizeShort?: string | null;
  customerCostCentre?: string | null;
  vehicleLayout?: VehicleLayout;
  vehicleModel?: VehicleModels;
  vehicleOperationType?: VehicleOperationType;
  vehicleManufacturer?: VehicleManufacturer;
  vehicleMake?: string | null;
  vehicleModelDr?: string | null;
  vehicleColour?: string | null;
  axleConfiguration?: string | null;
  tyreFitments?: Fitment[] | null;
}

export interface CustomerFleetlist {
  /** @format int32 */
  customerFleetListId?: number;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  customerFleetlistVehicleReg?: string | null;
  customerFleetlistActive?: boolean | null;
  /** @format date-time */
  customerFleetlistDefleetDate?: string | null;
  /** @format int32 */
  vehicleManufacturerId?: number | null;
  /** @format int32 */
  vehicleModelId?: number | null;
  vehicleAxleConfigShort?: string | null;
  /** @format int32 */
  vehicleOperationTypeId?: number | null;
  isContractVehicle?: boolean | null;
  vehicleNotes?: string | null;
  /** @format double */
  vehicleMonthlyRevenue?: number | null;
  /** @format date-time */
  dateAddedToFleetList?: string | null;
  forArchive?: boolean | null;
  axleATyreSizeShort?: string | null;
  axleBTyreSizeShort?: string | null;
  axleCTyreSizeShort?: string | null;
  axleDTyreSizeShort?: string | null;
  axleETyreSizeShort?: string | null;
  customerCostCentre?: string | null;
  vehicleLayout?: VehicleLayout;
  vehicleModel?: VehicleModels;
  vehicleOperationType?: VehicleOperationType;
  customerGroup?: CustomerGroup;
  customerLocation?: CustomerLocation;
  vehicleManufacturer?: VehicleManufacturer;
  /** @format int32 */
  driveRightId?: number | null;
}

export interface CustomerFleetlistViewModel {
  /** @format int32 */
  customerFleetListId?: number;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  customerFleetlistVehicleReg?: string | null;
  customerFleetlistActive?: boolean | null;
  /** @format date-time */
  customerFleetlistDefleetDate?: string | null;
  /** @format int32 */
  vehicleManufacturerId?: number | null;
  /** @format int32 */
  vehicleModelId?: number | null;
  vehicleAxleConfigShort?: string | null;
  /** @format int32 */
  vehicleOperationTypeId?: number | null;
  isContractVehicle?: boolean | null;
  vehicleNotes?: string | null;
  /** @format double */
  vehicleMonthlyRevenue?: number | null;
  /** @format date-time */
  dateAddedToFleetList?: string | null;
  forArchive?: boolean | null;
  vehicleGroupShort?: string | null;
  vehicleOperationDescription?: string | null;
  vehicleLayout?: VehicleLayoutViewModel;
  vehicleMake?: string | null;
  vehicleModel?: string | null;
  vehicleColour?: string | null;
  axleConfiguration?: string | null;
  tyreFitments?: Fitment[] | null;
}

export interface CustomerGroup {
  /** @format int32 */
  customerSuperGroupId?: number | null;
  /** @format int32 */
  customerGroupId?: number;
  customerGroupName?: string | null;
  customerGroupAddress1?: string | null;
  customerGroupAddress2?: string | null;
  customerGroupAddress3?: string | null;
  customerGroupAddress4?: string | null;
  customerGroupCounty?: string | null;
  customerGroupPostcode1?: string | null;
  customerGroupPostcode2?: string | null;
  customerGroupCountry?: string | null;
  customerGroupPrimaryName?: string | null;
  customerGroupPrimaryTelephone?: string | null;
  customerGroupPrimaryFax?: string | null;
  customerGroupPrimaryEmail?: string | null;
  customerGroupSecondaryName?: string | null;
  customerGroupSecondaryTelephone?: string | null;
  customerGroupSecondaryFax?: string | null;
  customerGroupSecondaryEmail?: string | null;
  customerGroupActive?: boolean | null;
  customerGroupAccountNumber?: string | null;
  customerGroupInvoiceOnlyAccount?: boolean | null;
  customerGroupIncludeForSalesVat?: boolean | null;
  customerGroupZeroRatedVat?: boolean | null;
  customerGroupAllowZeroValueItems?: boolean | null;
  customerGroupOrderNumberRequired?: boolean | null;
  policySteer1st?: string | null;
  policySteer2nd?: string | null;
  policyDrive1st?: string | null;
  policyDrive2nd?: string | null;
  policyTrailer1st?: string | null;
  policyTrailer2nd?: string | null;
  _3rdPartyCustomerNamePrompt?: boolean | null;
  /** @format date-time */
  customerGroupPricingRenewalDate?: string | null;
  /** @format int32 */
  customerGroupDaysBetweenInspections?: number | null;
  /** @format int32 */
  customerGroupPaymentDays?: number | null;
  customerGroupOrderNumberRequestedAtIc?: boolean | null;
  salesmanInitials?: string | null;
  useGlpBuyingPrices?: boolean | null;
  showToServiceProviders?: boolean | null;
  isBankFinanced?: boolean | null;
  /** @format int32 */
  majorRepairDest?: number | null;
  forDete?: boolean | null;
  /** @format int32 */
  customerGroupCreditLimit?: number | null;
  forArchive?: boolean | null;
  retorqueText?: string | null;
  retorqueReminderActive?: boolean | null;
  affilliateLogo?: string | null;
  restrictQty?: boolean | null;
  dtmphoneNumber?: string | null;
  vehicleNotes?: string | null;
  fixedFleet?: boolean | null;
  hasFixedPricedContract?: boolean | null;
  sendJobSheetWithInvoice?: boolean;
  sendIndividualInvoices?: boolean;
  customerRegistrationNumber?: string | null;
  /** @format date-time */
  createdDateTime?: string | null;
  /** @format int32 */
  createdById?: number | null;
  showCustomerJobNumber?: boolean;
  includeESG?: boolean | null;
  poRequestFormat?: PoRequestFormat;
  customerLocations?: CustomerLocation[] | null;
  contacts?: Contact[] | null;
  customerProperties?: CustomerProperty[] | null;
  customerSla?: CustomerSLA[] | null;
  notificationCustomerEvents?: NotificationCustomerEvent[] | null;
}

export interface CustomerGroupInfo {
  /** @format int32 */
  customerGroupId?: number;
  customerGroupName?: string | null;
  isActive?: boolean | null;
}

export interface CustomerGroupListViewModel {
  /** @format int32 */
  customerSuperGroupId?: number | null;
  /** @format int32 */
  customerGroupId?: number;
  customerGroupName?: string | null;
  customerGroupCounty?: string | null;
  customerGroupPostcode?: string | null;
  customerGroupCountry?: string | null;
  isOnStop?: boolean;
  isInvoiceOnly?: boolean;
  /** @format int32 */
  customerGroupCreditLimit?: number | null;
}

export interface CustomerGroupListViewModelPagedResultViewModel {
  items?: CustomerGroupListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerGroupLookupViewModel {
  /** @format int32 */
  customerSuperGroupId?: number | null;
  /** @format int32 */
  customerGroupId?: number;
  customerGroupName?: string | null;
  isInvoiceOnly?: boolean;
  isOnStop?: boolean;
  customerGroupPostcode1?: string | null;
  hasSla?: boolean;
}

export interface CustomerGroupLookupViewModelIEnumerablePagedResultViewModel {
  items?: CustomerGroupLookupViewModel[][] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerGroupLookupViewModelPagedResultViewModel {
  items?: CustomerGroupLookupViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerInputModel {
  /** @format int32 */
  id?: number | null;
  customerName?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  addressLine3?: string | null;
  addressLine4?: string | null;
  county?: string | null;
  country?: string | null;
  postcode1?: string | null;
  postcode2?: string | null;
  /** @format int32 */
  customerTerms?: number | null;
  dtmAccountNo?: string | null;
  callhandlersCanSeeAccount?: boolean;
  vatSalesApplicable?: boolean;
  chargeVatAtZero?: boolean;
  accountBankFinanced?: boolean;
  /** @format int32 */
  creditLimit?: number | null;
  fixedCustomerGroup?: boolean;
  zeroPricesAllowed?: boolean;
  requiresOrderNoAtIc?: boolean;
  requiresOrderNoAtSignOff?: boolean;
  thirdPartyCustomerPrompt?: boolean;
  showToServiceProviders?: boolean;
  steer1stChoice?: string | null;
  steer2ndChoice?: string | null;
  drive1stChoice?: string | null;
  drive2ndChoice?: string | null;
  trailer1stChoice?: string | null;
  trailer2ndChoice?: string | null;
  wheelRetorqueProcedure?: string | null;
  wheelRetorqueReminder?: boolean;
  salesmanInitials?: string | null;
  /** @format int32 */
  daysBetweenInspection?: number | null;
  /** @format int32 */
  majorRepairsDestination?: number | null;
  /** @format date-time */
  pricingRenewalDate?: string;
  useGlpBuyingPrices?: boolean;
  hasFixedPricedContract?: boolean;
  sendJobSheetWithInvoice?: boolean;
  sendIndividualInvoices?: boolean;
  customerRegistrationNumber?: string | null;
  showCustomerJobNumber?: boolean;
  includeESG?: boolean | null;
  vehicleNotes?: string | null;
  poRequestFormat?: PoRequestFormat;
  contacts?: ContactInputModel[] | null;
  location?: LocationInputModel;
}

export interface CustomerJobInputModel {
  userTitle?: string | null;
  userFirstName?: string | null;
  userLastName?: string | null;
  userContactNumber?: string | null;
  userEmail?: string | null;
  userIsDriver?: boolean;
  driverTitle?: string | null;
  driverFirstName?: string | null;
  driverLastName?: string | null;
  driverContactNo?: string | null;
  driverEmail?: string | null;
  vehicleRegistration?: string | null;
  vehicleLocationCategory?: string | null;
  /** @format int32 */
  vehicleAvailability?: number | null;
  vehicleLocationDetails?: string | null;
  /** @format int32 */
  customerFleetListId?: number;
  requestSummary?: string | null;
  geolocationGuid?: string | null;
  tyreType?: string | null;
  applicationType?: string | null;
  jobItems?: ServiceRequestJobItem[] | null;
}

export interface CustomerLocation {
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number;
  customerLocName?: string | null;
  customerLocAddress1?: string | null;
  customerLocAddress2?: string | null;
  customerLocAddress3?: string | null;
  customerLocAddress4?: string | null;
  customerLocCounty?: string | null;
  customerLocPostcode1?: string | null;
  customerLocPostcode2?: string | null;
  customerLocCountry?: string | null;
  customerLocPrimaryContact?: string | null;
  customerLocSecondaryContact?: string | null;
  customerLocTelephone?: string | null;
  customerLocFax?: string | null;
  customerLocEmail?: string | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  customerLocActive?: boolean | null;
  customerInvName?: string | null;
  customerInvAddress1?: string | null;
  customerInvAddress2?: string | null;
  customerInvAddress3?: string | null;
  customerInvAddress4?: string | null;
  customerInvCounty?: string | null;
  customerInvPostcode1?: string | null;
  customerInvPostcode2?: string | null;
  customerInvCountry?: string | null;
  /** @format date-time */
  lastVisitDate?: string | null;
  /** @format int32 */
  lastVisitBy?: number | null;
  casingsEnterCasingCollectionChain?: boolean | null;
  forArchive?: boolean | null;
  alertIllegalRemovalDepthEmailTo?: string | null;
  notificationsEmail?: boolean | null;
  notificationsText?: boolean | null;
  sendToTradex?: boolean | null;
  poreference?: string | null;
  /** @format int32 */
  customerCostCentre?: number | null;
  notes?: string | null;
  customerGroup?: CustomerGroup;
  serviceProviderLocation?: ServiceProviderLocation;
  serviceProviderGroup?: ServiceProviderGroup;
  accountsSalesLedgers?: AccountsSalesLedger[] | null;
  accountsCashBooks?: AccountsCashBook[] | null;
  contactLocations?: ContactLocation[] | null;
  customerSLALocations?: CustomerSLALocation[] | null;
  geographyPostcodeCoord?: GeographyPostcodeCoord;
}

export interface CustomerLocationLookupViewModel {
  /** @format int32 */
  customerLocId?: number;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  customerLocName?: string | null;
  customerCounty?: string | null;
  customerAddress?: string | null;
  customerPostCode?: string | null;
  customersServiceProviderName?: string | null;
}

export interface CustomerLocationLookupViewModelIEnumerablePagedResultViewModel {
  items?: CustomerLocationLookupViewModel[][] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerLocationLookupViewModelPagedResultViewModel {
  items?: CustomerLocationLookupViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerPriceInputModel {
  /** @format int32 */
  customerGroupId?: number;
  productRef?: string | null;
  /** @format double */
  costPrice?: number;
  /** @format double */
  custPrice?: number;
  /** @format double */
  netRebate?: number;
  /** @format double */
  netCustRebate?: number;
}

export interface CustomerPricesGpl {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  customerGroupId?: number | null;
  productRef?: string | null;
  /** @format double */
  costPrice?: number | null;
  /** @format double */
  custPrice?: number | null;
  /** @format double */
  netRebate?: number | null;
  /** @format double */
  netCustRebate?: number | null;
  /** @format date-time */
  lastAmendmentDate?: string | null;
  /** @format int32 */
  uniqueId?: number | null;
  /** @format int32 */
  priceRevisionId?: number | null;
}

export interface CustomerPropertiesDescription {
  /** @format int32 */
  id?: number;
  description?: string | null;
  customerProperties?: CustomerProperty[] | null;
}

export interface CustomerProperty {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  propertyId?: number | null;
  enabled?: boolean | null;
  property?: CustomerPropertiesDescription;
}

export interface CustomerReportingInputModel {
  /** @format int32 */
  id?: number;
  /** @minLength 1 */
  customerUsername: string;
  customerPassword?: string | null;
  /** @minLength 1 */
  customerFirst: string;
  /** @minLength 1 */
  customerLast: string;
  /**
   * @format email
   * @minLength 1
   */
  emailAddress: string;
  active?: boolean | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  reportingLocId?: number | null;
  /** @format date-time */
  lastLoginDate?: string | null;
  /** @format date-time */
  lastLoginTime?: string | null;
  /** @format int32 */
  loginCount?: number | null;
  requestPasswordChange?: boolean | null;
  userGuid?: string | null;
  customerReportingPrivileges?: CustomerReportingPrivilegeInputModel[] | null;
}

export interface CustomerReportingPrivilegeInputModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  userId?: number;
  /** @format int32 */
  reportId?: number | null;
  allowReport?: boolean | null;
  forArchive?: boolean | null;
}

export interface CustomerReportingUserPasswordInputModel {
  /** @format int32 */
  id?: number;
  customerPassword?: string | null;
}

export interface CustomerSLA {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  crNumber?: number;
  /** @format int32 */
  customerGroupId: number;
  /** @format int32 */
  primaryCustomerSLACategoryId?: number;
  /** @format int32 */
  secondaryCustomerSLACategoryId?: number;
  /** @format int32 */
  versionNumber: number;
  customerLogo?: string | null;
  /** @format date-time */
  createdDate?: string;
  /** @format date-time */
  dateOfRevision?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  latestRenewalDate?: string | null;
  /** @format date-time */
  pricingExpiryDate?: string | null;
  /** @format date-time */
  contractEndDate?: string | null;
  customerGroup?: CustomerGroup;
  customerSLACategoryPrimary?: CustomerSLACategory;
  customerSLACategorySecondary?: CustomerSLACategory;
  customerSLAKeyContacts?: CustomerSLAKeyContact[] | null;
  dtmslaKeyContacts?: DTMSLAKeyContact[] | null;
  customerSLALocations?: CustomerSLALocation[] | null;
  customerSLAPolicyFitments?: CustomerSLAPolicyFitment[] | null;
  customerSLAPolicyPreferences?: CustomerSLAPolicyPreference[] | null;
  customerSLAInvoicePreferences?: CustomerSLAInvoicePreference[] | null;
}

export interface CustomerSLACategory {
  /** @format int32 */
  id?: number;
  /**
   * @minLength 1
   * @maxLength 500
   */
  description: string;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  primaryCustomerSLAs?: CustomerSLA[] | null;
  secondaryCustomerSLAs?: CustomerSLA[] | null;
}

export interface CustomerSLACategoryViewModel {
  /** @format int32 */
  id?: number;
  category?: string | null;
}

export interface CustomerSLAClosestProviderViewModel {
  /** @format int32 */
  customerGroupId?: number;
  /** @format int32 */
  serviceProviderLocationId?: number;
  serviceProviderName?: string | null;
  addressLine?: string | null;
  county?: string | null;
  country?: string | null;
  postcode?: string | null;
  /** @format double */
  distanceFromLoc?: number | null;
  serviceProviderLocPostcode1?: string | null;
  serviceProviderLocPostcode2?: string | null;
  geographyPostcodeCoord?: GeographyPostcodeCoord;
}

export interface CustomerSLAClosestProviderViewModelPagedResultViewModel {
  items?: CustomerSLAClosestProviderViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerSLAInputModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  crNumber?: number;
  /** @format int32 */
  customerGroupId?: number;
  /** @format int32 */
  customerPrimaryCategory?: number;
  /** @format int32 */
  customerSecondaryCategory?: number;
  /** @format int32 */
  versionNumber?: number;
  /** @format date-time */
  dateOfRevision?: string | null;
  customerLogo?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  latestRenewalDate?: string | null;
  /** @format date-time */
  pricingExpiryDate?: string | null;
  /** @format date-time */
  contractEndDate?: string | null;
  /** @format date-time */
  createdDate?: string | null;
}

export interface CustomerSLAInvoiceFrequency {
  /** @format int32 */
  id?: number;
  /**
   * @minLength 1
   * @maxLength 1000
   */
  description: string;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAInvoicePreferences?: CustomerSLAInvoicePreference[] | null;
}

export interface CustomerSLAInvoiceFrequencyLookupViewModel {
  /** @format int32 */
  id?: number;
  description?: string | null;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
}

export interface CustomerSLAInvoiceFrequencyViewModel {
  /** @format int32 */
  id?: number;
  description?: string | null;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAInvoicePreferences?: CustomerSLAInvoicePreferenceViewModel[] | null;
}

export interface CustomerSLAInvoicePeriod {
  /** @format int32 */
  id?: number;
  /**
   * @minLength 1
   * @maxLength 1000
   */
  description: string;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAInvoicePreferences?: CustomerSLAInvoicePreference[] | null;
}

export interface CustomerSLAInvoicePeriodLookupViewModel {
  /** @format int32 */
  id?: number;
  description?: string | null;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
}

export interface CustomerSLAInvoicePeriodViewModel {
  /** @format int32 */
  id?: number;
  description?: string | null;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAInvoicePreferences?: CustomerSLAInvoicePreferenceViewModel[] | null;
}

export interface CustomerSLAInvoicePreference {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId: number;
  /** @format int32 */
  customerSLAInvoiceFrequencyId: number;
  /** @format int32 */
  customerSLAInvoicePeriodId: number;
  /** @minLength 1 */
  authorisationInstruction: string;
  /** @minLength 1 */
  fleetAmendmentInstruction: string;
  /** @minLength 1 */
  purchaseOrderProcess: string;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLA?: CustomerSLA;
  customerSLAInvoiceFrequency?: CustomerSLAInvoiceFrequency;
  customerSLAInvoicePeriod?: CustomerSLAInvoicePeriod;
}

export interface CustomerSLAInvoicePreferenceInputModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  customerSLAInvoiceFrequencyId?: number;
  /** @format int32 */
  customerSLAInvoicePeriodId?: number;
  authorisationInstruction?: string | null;
  fleetAmendmentInstruction?: string | null;
  purchaseOrderProcess?: string | null;
  isDeleted?: boolean | null;
  /** @format date-time */
  createdDate?: string | null;
}

export interface CustomerSLAInvoicePreferenceLookupViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  customerSLAInvoiceFrequencyId?: number;
  /** @format int32 */
  customerSLAInvoicePeriodId?: number;
  authorisationInstruction?: string | null;
  fleetAmendmentInstruction?: string | null;
  purchaseOrderProcess?: string | null;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAInvoiceFrequency?: CustomerSLAInvoiceFrequencyLookupViewModel;
  customerSLAInvoicePeriod?: CustomerSLAInvoicePeriodLookupViewModel;
}

export interface CustomerSLAInvoicePreferenceViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  customerSLAInvoiceFrequencyId?: number;
  /** @format int32 */
  customerSLAInvoicePeriodId?: number;
  authorisationInstruction?: string | null;
  fleetAmendmentInstruction?: string | null;
  purchaseOrderProcess?: string | null;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAInvoiceFrequency?: CustomerSLAInvoiceFrequencyViewModel;
  customerSLAInvoicePeriod?: CustomerSLAInvoicePeriodViewModel;
  customerSLA?: CustomerSLAViewModel;
}

export interface CustomerSLAKeyContact {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId: number;
  /** @format int32 */
  contactId: number;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLA?: CustomerSLA;
  contact?: Contact;
}

export interface CustomerSLAKeyContactInputModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  contactId?: number;
  isDeleted?: boolean | null;
  /** @format date-time */
  createdDate?: string | null;
}

export interface CustomerSLAKeyContactViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  contactId?: number;
  position?: string | null;
  isDeleted?: boolean | null;
  /** @format date-time */
  createdDate?: string;
  fullName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  /** @format int32 */
  customerGroupId?: number;
}

export interface CustomerSLALocation {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId: number;
  /** @format int32 */
  customerLocationId: number;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLA?: CustomerSLA;
  customerLocation?: CustomerLocation;
}

export interface CustomerSLALocationInputModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  customerLocationId?: number;
  isDeleted?: boolean | null;
  /** @format date-time */
  createdDate?: string | null;
}

export interface CustomerSLALocationViewModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  slaId?: number | null;
  /** @format int32 */
  customerLocationId?: number;
  isDeleted?: boolean | null;
  /** @format date-time */
  createdDate?: string | null;
  /** @format int32 */
  customerGroupId?: number;
  locationName?: string | null;
  addressLine?: string | null;
  county?: string | null;
  postcode?: string | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  serviceProviderName?: string | null;
  customerLocPostcode1?: string | null;
  customerLocPostcode2?: string | null;
  geographyPostcodeCoord?: GeographyPostcodeCoord;
}

export interface CustomerSLALocationViewModelPagedResultViewModel {
  items?: CustomerSLALocationViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerSLAPolicyCategory {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerSLAPolicyTypeId: number;
  /**
   * @minLength 1
   * @maxLength 1000
   */
  description: string;
  isDeleted: boolean;
  /** @format date-time */
  createdDate: string;
  customerSLAPolicyType?: CustomerSLAPolicyType;
  customerSLAStandardPolicies?: CustomerSLAStandardPolicy[] | null;
}

export interface CustomerSLAPolicyCategoryLookupViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerSLAPolicyTypeId?: number;
  description?: string | null;
  isDeleted?: boolean;
  policies?: CustomerSLAStandardPolicyLookupViewModel[] | null;
}

export interface CustomerSLAPolicyCategoryViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerSLAPolicyTypeId?: number;
  description?: string | null;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAPolicyType?: CustomerSLAPolicyTypeViewModel;
  customerSLAStandardPolicies?: CustomerSLAStandardPolicyViewModel[] | null;
}

export interface CustomerSLAPolicyFitment {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId: number;
  /** @format int32 */
  customerSLATyreTypeId: number;
  /** @format int32 */
  seasonId: number;
  /**
   * @minLength 1
   * @maxLength 50
   */
  axleConfig: string;
  /**
   * @minLength 1
   * @maxLength 50
   */
  axleType: string;
  /** @format double */
  minimumTreadDepth: number;
  /** @format double */
  twinning: number;
  regroove: boolean;
  retorque: boolean;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLA?: CustomerSLA;
  customerSLATyreType?: CustomerSLATyreType;
  productSeason?: ProductSeason;
  vehicleLayout?: VehicleLayout;
  vehicleAxleType?: VehicleAxleType;
  customerSLATyrePreferences?: CustomerSLATyrePreference[] | null;
}

export interface CustomerSLAPolicyFitmentInputModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  customerSLATyreTypeId?: number;
  /** @format int32 */
  seasonId?: number;
  /** @maxLength 50 */
  axleConfig?: string | null;
  /** @maxLength 50 */
  axleType?: string | null;
  /** @format double */
  minimumTreadDepth?: number;
  /** @format double */
  twinning?: number;
  regroove?: boolean;
  retorque?: boolean;
  isDeleted?: boolean | null;
  /** @format date-time */
  createdDate?: string | null;
  customerSLATyrePreferenceInputModels?: CustomerSLATyrePreferenceInputModel[] | null;
}

export interface CustomerSLAPolicyFitmentViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  customerSLATyreTypeId?: number;
  /** @format int32 */
  seasonId?: number;
  axleConfig?: string | null;
  axleType?: string | null;
  /** @format double */
  minimumTreadDepth?: number;
  /** @format double */
  twinning?: number;
  regroove?: boolean;
  retorque?: boolean;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLATyrePreferences?: CustomerSLATyrePreferenceViewModel[] | null;
  vehicleLayout?: CustomerSLAVehicleLayoutPolicyFitmentViewModel;
}

export interface CustomerSLAPolicyPreference {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId: number;
  /** @format int32 */
  customerSLAStandardPolicyId: number;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLA?: CustomerSLA;
  customerSLAStandardPolicy?: CustomerSLAStandardPolicy;
}

export interface CustomerSLAPolicyPreferenceInputModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  customerSLAStandardPolicyId?: number;
  checked?: boolean | null;
}

export interface CustomerSLAPolicyPreferenceViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  customerSLAStandardPolicyId?: number;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLA?: CustomerSLAViewModel;
  customerSLAStandardPolicy?: CustomerSLAStandardPolicyViewModel;
}

export interface CustomerSLAPolicyType {
  /** @format int32 */
  id?: number;
  /**
   * @minLength 1
   * @maxLength 500
   */
  description: string;
  isDeleted: boolean;
  /** @format date-time */
  createdDate: string;
  customerSLAPolicyCategories?: CustomerSLAPolicyCategory[] | null;
}

export interface CustomerSLAPolicyTypeLookupViewModel {
  /** @format int32 */
  id?: number;
  description?: string | null;
  isDeleted?: boolean;
  categories?: CustomerSLAPolicyCategoryLookupViewModel[] | null;
}

export interface CustomerSLAPolicyTypeViewModel {
  /** @format int32 */
  id?: number;
  description?: string | null;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAPolicyCategories?: CustomerSLAPolicyCategoryViewModel[] | null;
}

export interface CustomerSLAProductMakeViewModel {
  /** @format int32 */
  productMakeId?: number;
  productMakeDescription?: string | null;
}

export interface CustomerSLAProductSeasonViewModel {
  /** @format int32 */
  seasonId?: number;
  description?: string | null;
}

export interface CustomerSLASecurityJobRolesViewModel {
  /** @format int32 */
  securityJobRolesId?: number;
  securityJobRole?: string | null;
}

export interface CustomerSLAStandardPolicy {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerSLAPolicyCategoryId: number;
  /**
   * @minLength 1
   * @maxLength 1000
   */
  description: string;
  /**
   * @minLength 1
   * @maxLength 1000
   */
  template: string;
  isDeleted: boolean;
  /** @format date-time */
  createdDate: string;
  customerSLAPolicyCategory?: CustomerSLAPolicyCategory;
  customerSLAPolicyPreferences?: CustomerSLAPolicyPreference[] | null;
}

export interface CustomerSLAStandardPolicyLookupViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerSLAPolicyCategoryId?: number;
  description?: string | null;
  template?: string | null;
  isDeleted?: boolean;
  checked?: boolean;
}

export interface CustomerSLAStandardPolicyViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerSLAPolicyCategoryId?: number;
  description?: string | null;
  template?: string | null;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAPolicyCategory?: CustomerSLAPolicyCategoryViewModel;
  customerSLAPolicyPreferences?: CustomerSLAPolicyPreferenceViewModel[] | null;
}

export interface CustomerSLATreadPatternViewModel {
  treadPatterns?: string[] | null;
}

export interface CustomerSLATyrePreference {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerSLAPolicyFitmentId: number;
  /** @format int32 */
  productMakeId: number;
  /**
   * @minLength 1
   * @maxLength 200
   */
  treadPattern: string;
  /** @format int32 */
  rank: number;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAPolicyFitment?: CustomerSLAPolicyFitment;
}

export interface CustomerSLATyrePreferenceInputModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  customerSLAPolicyFitmentId?: number | null;
  /** @format int32 */
  productMakeId?: number;
  /** @maxLength 200 */
  treadPattern?: string | null;
  /** @format int32 */
  rank?: number;
  isDeleted?: boolean | null;
  /** @format date-time */
  createdDate?: string | null;
}

export interface CustomerSLATyrePreferenceViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerSLAPolicyFitmentId?: number;
  /** @format int32 */
  productMakeId?: number;
  treadPattern?: string | null;
  /** @format int32 */
  rank?: number;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
}

export interface CustomerSLATyreType {
  /** @format int32 */
  id?: number;
  /**
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLAPolicyFitments?: CustomerSLAPolicyFitment[] | null;
}

export interface CustomerSLATyreTypeViewModel {
  /** @format int32 */
  customerSLATyreTypeId?: number;
  description?: string | null;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
}

export interface CustomerSLAVehicleAxleTypeViewModel {
  axleType?: string | null;
  description?: string | null;
}

export interface CustomerSLAVehicleClassificationViewModel {
  vehicleClassifications?: string[] | null;
}

export interface CustomerSLAVehicleLayoutLookupModel {
  axleConfig?: string | null;
  vehicleGroupShort?: string | null;
  vehicleAxleConfigDescription?: string | null;
  vehicleClassification?: string | null;
  /** @format int32 */
  vehicleAxleCount?: number | null;
  /** @format int32 */
  vehicleWheelCount?: number | null;
  vehicleAxleAAxleType?: string | null;
  vehicleAxleBAxleType?: string | null;
  vehicleAxleCAxleType?: string | null;
  vehicleAxleDAxleType?: string | null;
  vehicleAxleEAxleType?: string | null;
  vehiclePosA1Code?: string | null;
  vehiclePosA2Code?: string | null;
  vehiclePosA3Code?: string | null;
  vehiclePosA4Code?: string | null;
  vehiclePosB1Code?: string | null;
  vehiclePosB2Code?: string | null;
  vehiclePosB3Code?: string | null;
  vehiclePosB4Code?: string | null;
  vehiclePosC1Code?: string | null;
  vehiclePosC2Code?: string | null;
  vehiclePosC3Code?: string | null;
  vehiclePosC4Code?: string | null;
  vehiclePosD1Code?: string | null;
  vehiclePosD2Code?: string | null;
  vehiclePosD3Code?: string | null;
  vehiclePosD4Code?: string | null;
  vehiclePosE1Code?: string | null;
  vehiclePosE2Code?: string | null;
  vehiclePosE3Code?: string | null;
  vehiclePosE4Code?: string | null;
}

export interface CustomerSLAVehicleLayoutPolicyFitmentViewModel {
  axleConfig?: string | null;
  vehicleGroupShort?: string | null;
  vehicleAxleConfigDescription?: string | null;
  vehicleClassification?: string | null;
  /** @format int32 */
  vehicleAxleCount?: number | null;
  /** @format int32 */
  vehicleWheelCount?: number | null;
  vehicleAxleAAxleType?: string | null;
  vehicleAxleBAxleType?: string | null;
  vehicleAxleCAxleType?: string | null;
  vehicleAxleDAxleType?: string | null;
  vehicleAxleEAxleType?: string | null;
  vehiclePosA1Code?: string | null;
  vehiclePosA2Code?: string | null;
  vehiclePosA3Code?: string | null;
  vehiclePosA4Code?: string | null;
  vehiclePosB1Code?: string | null;
  vehiclePosB2Code?: string | null;
  vehiclePosB3Code?: string | null;
  vehiclePosB4Code?: string | null;
  vehiclePosC1Code?: string | null;
  vehiclePosC2Code?: string | null;
  vehiclePosC3Code?: string | null;
  vehiclePosC4Code?: string | null;
  vehiclePosD1Code?: string | null;
  vehiclePosD2Code?: string | null;
  vehiclePosD3Code?: string | null;
  vehiclePosD4Code?: string | null;
  vehiclePosE1Code?: string | null;
  vehiclePosE2Code?: string | null;
  vehiclePosE3Code?: string | null;
  vehiclePosE4Code?: string | null;
}

export interface CustomerSLAViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  crNumber?: number;
  /** @format int32 */
  customerGroupId?: number;
  /** @format int32 */
  customerPrimaryCategory?: number;
  customerPrimaryCategoryName?: string | null;
  /** @format int32 */
  customerSecondaryCategory?: number;
  customerSecondaryCategoryName?: string | null;
  customerGroupName?: string | null;
  /** @format int32 */
  versionNumber?: number;
  /** @format date-time */
  dateOfRevision?: string | null;
  customerLogo?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  latestRenewalDate?: string | null;
  /** @format date-time */
  pricingExpiryDate?: string | null;
  /** @format date-time */
  contractEndDate?: string | null;
  /** @format date-time */
  createdDate?: string;
}

export interface CustomerSLAViewModelPagedResultViewModel {
  items?: CustomerSLAViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface DTMSLAKeyContact {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slaId: number;
  /** @format int32 */
  userInformationId: number;
  /** @format int32 */
  securityJobRolesId: number;
  isDeleted?: boolean;
  /** @format date-time */
  createdDate?: string;
  customerSLA?: CustomerSLA;
  userInformation?: UserInformation;
  securityJobRole?: SecurityJobRole;
}

export interface DTMSLAKeyContactInputModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  slaId?: number;
  /** @format int32 */
  securityJobRolesId?: number;
  /** @format int32 */
  userInformationId?: number;
  isDeleted?: boolean | null;
  /** @format date-time */
  createdDate?: string | null;
}

export interface DTMSLAKeyContactViewModel {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  slaId?: number | null;
  /** @format int32 */
  userInformationId?: number;
  /** @format int32 */
  securityJobRolesId?: number;
  fullName?: string | null;
  isDeleted?: boolean | null;
}

export interface DateTimeInputModel {
  /** @format date-time */
  dateTime?: string;
}

export interface DateTimeNoteInputModel {
  /** @format date-time */
  dateTime?: string;
  note?: string | null;
}

export interface DeployJobInputModel {
  deployRequest?: boolean;
  /** @format int32 */
  deployedServiceLocId?: number;
  /** @format int32 */
  deployedUserId?: number;
  /** @format date-time */
  deployedDate?: string;
  /** @format date-time */
  deployedTime?: string;
  /** @format int32 */
  deployedServiceLocETA?: number;
  /** @format date-time */
  etaBefore?: string;
  /** @format date-time */
  prebookedDate?: string | null;
  deployedFitterMobileNo?: string | null;
  /** @format int32 */
  deployedAgreedMake?: number;
  /** @format int32 */
  tyresRequested?: number;
  agreedDeployCallOut?: string | null;
  holdJob?: boolean;
  /** @format int32 */
  serviceRequestHeaderId?: number;
}

export interface DialAgent {
  /** @format int32 */
  uniqueId?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  dialAgentId?: string | null;
  dialNumber?: string | null;
  emailAddress?: string | null;
}

export interface DialModel {
  callNumber?: string | null;
  prefix?: string | null;
  agentId?: string | null;
  agentNumber?: string | null;
}

export interface EmailInputModel {
  to?: string | null;
  cc?: string | null;
  bcc?: string | null;
  from?: string | null;
  subject?: string | null;
  body?: string | null;
  isDraft?: boolean;
  templateUrl?: string | null;
  templateData?: string | null;
  /** @format int32 */
  attachmentSet?: number | null;
  /** @format int32 */
  createdBy?: number;
}

/** @format int32 */
export enum ExportType {
  Value0 = 0,
  Value1 = 1,
}

export interface Fitment {
  /** @format int32 */
  fitmentId?: number;
  /** @format int32 */
  vehicleId?: number;
  /** @format date-time */
  lastUpdatedDate?: string;
  /** @format int32 */
  chassisId?: number;
  modelName?: string | null;
  /** @format int32 */
  modelId?: number;
  kw?: string | null;
  ukYear?: string | null;
  euroYear?: string | null;
  tyreSize?: string | null;
  loadIndex?: string | null;
  speedIndex?: string | null;
  tyrePressure?: string | null;
  rimSize?: string | null;
  rimOffset?: string | null;
  tyreSizeR?: string | null;
  loadIndexR?: string | null;
  speedIndexR?: string | null;
  tyrePressureR?: string | null;
  rimSizeR?: string | null;
  offsetR?: string | null;
  modelLadenTpF?: string | null;
  modelLadenTpR?: string | null;
  runflatF?: string | null;
  runflatR?: string | null;
  extraloadF?: string | null;
  extraloadR?: string | null;
  oeDescription?: string | null;
  changeDate?: string | null;
  tpFPsi?: string | null;
  tpRPsi?: string | null;
  ltpFPsi?: string | null;
  ltpRPsi?: string | null;
  pcd?: string | null;
  /** @format double */
  centreBore?: number | null;
  nutBoltThreadType?: string | null;
  nutBoltHex?: string | null;
  boltLength?: string | null;
  nutBoltTorque?: string | null;
  /** @format int32 */
  sortOrder?: number;
  previousJobItem?: boolean;
}

export interface FleetImportViewModel {
  /** @format int32 */
  vehicleId?: number;
  vehicleReg?: string | null;
  /** @format int32 */
  customerGroupId?: number;
  oldLocation?: string | null;
  newLocation?: string | null;
  isLocationChanged?: boolean;
  oldCostCentre?: string | null;
  newCostCentre?: string | null;
  isCostCentreChanged?: boolean;
  oldVehicleNotes?: string | null;
  newVehicleNotes?: string | null;
  areVehicleNotesChanged?: boolean;
  oldAxleConfig?: string | null;
  newAxleConfig?: string | null;
  isAxleConfigChanged?: boolean;
  existsInGroups?: CustomerGroupInfo[] | null;
  action?: string | null;
  ignoreAction?: boolean | null;
}

export interface GeographyGeolocation {
  requestGUID?: string | null;
  /** @format double */
  longitude?: number | null;
  /** @format double */
  latitude?: number | null;
  /** @format int32 */
  easting?: number | null;
  /** @format int32 */
  northing?: number | null;
}

export interface GeographyPostcodeCoord {
  postcode1?: string | null;
  /** @format int32 */
  x?: number | null;
  /** @format int32 */
  y?: number | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  district?: string | null;
  customerLocations?: CustomerLocation[] | null;
}

export interface GeolocationInputModel {
  identifier?: string | null;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format int32 */
  easting?: number;
  /** @format int32 */
  northing?: number;
}

export interface GetParameters {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  itemsPerPage?: number;
  sort?: string | null;
  direction?: string | null;
  filters?: string[] | null;
}

export interface HeldDeployment {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  userId?: number | null;
  /** @format date-time */
  timestamp?: string | null;
  serviceRequestHeader?: ServiceRequestHeader;
}

export interface InitialLocationCategory {
  /** @format int32 */
  initialLocationCategoryId?: number;
  categoryCode?: string | null;
  categoryDescription?: string | null;
}

export interface Int32StringKeyValuePair {
  /** @format int32 */
  key?: number;
  value?: string | null;
}

export interface JobItemInputModel {
  axlePos?: string | null;
  tyreSize?: string | null;
  speedRating?: string | null;
  loadRating?: string | null;
  removalReason?: RemovalReason;
  positionCode?: string | null;
}

export interface JobLineInputModel {
  /** @format double */
  supplyPricePerUnit?: number;
  axlePosition?: string | null;
  /** @format int32 */
  quantity?: number;
  /** @format double */
  customerPrice?: number;
  /** @format double */
  manufRebateValue?: number;
  /** @format double */
  custRebateValue?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number;
  productRef?: string | null;
  retorqueSerialNo?: string | null;
  reasonForRemoval?: string | null;
  /** @format float */
  remainingTread?: number | null;
  /** @format int32 */
  tyreOffManuf?: number | null;
  newOrRemould?: string | null;
  serialOff?: string | null;
  serialOn?: string | null;
  dotCode?: string | null;
  /** @format int32 */
  removalDestination?: number | null;
  /** @format int32 */
  pwSourceId?: number | null;
}

export interface JobRefusalInputModel {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format int32 */
  refusalReasonId?: number;
  contactName?: string | null;
  /** @format int32 */
  serviceProviderLocationId?: number;
  /** @format int32 */
  uniqueId?: number | null;
}

export interface LocationInputModel {
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  customerGroupId?: number | null;
  locationName?: string | null;
  locationAddressLine1?: string | null;
  locationAddressLine2?: string | null;
  locationAddressLine3?: string | null;
  locationAddressLine4?: string | null;
  locationCounty?: string | null;
  locationCountry?: string | null;
  locationPostcode1?: string | null;
  locationPostcode2?: string | null;
  invoiceAddressName?: string | null;
  invoiceAddressLine1?: string | null;
  invoiceAddressLine2?: string | null;
  invoiceAddressLine3?: string | null;
  invoiceAddressLine4?: string | null;
  invoiceCounty?: string | null;
  invoiceCountry?: string | null;
  invoicePostcode1?: string | null;
  invoicePostcode2?: string | null;
  locationPrimaryContactName?: string | null;
  locationSecondaryContactName?: string | null;
  locationTelephoneNumber?: string | null;
  locationFaxNumber?: string | null;
  locationEmailAddress?: string | null;
  /** @format int32 */
  preferedServiceProvider?: number | null;
  casingsToEnterCasingChain?: boolean;
  emailIllegalRemoval?: string | null;
  jobNotes?: string | null;
  /** @format int32 */
  customerCostCentreCode?: number | null;
  preferedServiceProviderName?: string | null;
}

export interface LocationNewServiceProviderInputModel {
  /** @format int32 */
  locationId?: number;
  /** @format int32 */
  serviceProviderId?: number;
  newServiceProviderName?: string | null;
}

export interface LoginInputModel {
  username?: string | null;
  password?: string | null;
  redirectUrl?: string | null;
}

export interface ManufacturerInputModel {
  /** @format int32 */
  productMake1?: number | null;
  productMakeDescription?: string | null;
}

export interface MultiplePrintRequestInputModel {
  ids?: number[] | null;
  /** @format int32 */
  emailId?: number | null;
  removeEmailDraft?: boolean | null;
}

export interface NetworkManagerUserInputModel {
  /** @format int32 */
  id?: number;
  /** @minLength 1 */
  networkManagerFirst: string;
  /** @minLength 1 */
  networkManagerLast: string;
  /** @minLength 1 */
  networkManagerInitials: string;
  /** @minLength 1 */
  networkManagerUsername: string;
  /** @minLength 1 */
  networkManagerPassword: string;
  active?: boolean | null;
  /** @format date-time */
  lastLoginDate?: string | null;
  /** @format date-time */
  lastLoginTime?: string | null;
}

export interface NominalLedgerListViewModel {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  postingDate?: string | null;
  /** @format int32 */
  nominalCode?: number | null;
  nominalCodeDescription?: string | null;
  postingDescription?: string | null;
  /** @format double */
  grossValue?: number | null;
}

export interface NominalLedgerListViewModelPagedResultViewModel {
  items?: NominalLedgerListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface NotificationAttachmentSet {
  /** @format int32 */
  notificationAttachmentSetId?: number;
  name?: string | null;
  notificationTemplates?: NotificationTemplate[] | null;
}

export interface NotificationCustomerEvent {
  /** @format int32 */
  notificationCustomerEventId?: number;
  /** @format int32 */
  customerGroupId?: number;
  /** @format int32 */
  notificationTemplateId?: number;
  active?: boolean;
  /** @format int32 */
  notificationEventId?: number;
  customerGroup?: CustomerGroup;
  notificationEvent?: NotificationEvent;
  notificationTemplate?: NotificationTemplate;
}

export interface NotificationEvent {
  /** @format int32 */
  notificationEventId?: number;
  name?: string | null;
  notificationCustomerEvents?: NotificationCustomerEvent[] | null;
}

export interface NotificationHistory {
  /** @format int32 */
  notificationHistoryId?: number;
  /** @format int32 */
  notificationEventId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format date-time */
  sentAt?: string;
  recipient?: string | null;
  recipientName?: string | null;
  content?: string | null;
  errorMessage?: string | null;
  notificationEvent?: NotificationEvent;
  serviceRequestHeader?: ServiceRequestHeader;
}

export interface NotificationMedium {
  /** @format int32 */
  notificationMediumId?: number;
  name?: string | null;
  notificationTemplates?: NotificationTemplate[] | null;
}

export interface NotificationQueue {
  /** @format int32 */
  notificationQueueId?: number;
  /** @format int32 */
  notificationEventId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format date-time */
  due?: string;
  recipient?: string | null;
  recipientName?: string | null;
  content?: string | null;
  notificationEvent?: NotificationEvent;
  serviceRequestHeader?: ServiceRequestHeader;
}

export interface NotificationTemplate {
  /** @format int32 */
  notificationTemplateId?: number;
  /** @format int32 */
  notificationMediumId?: number;
  /** @format int32 */
  notificationAttachmentSetId?: number | null;
  name?: string | null;
  template?: string | null;
  subject?: string | null;
  notificationMedium?: NotificationMedium;
  notificationAttachmentSet?: NotificationAttachmentSet;
  notificationCustomerEvents?: NotificationCustomerEvent[] | null;
}

export interface OpeningTimesViewModel {
  /** @format int32 */
  serviceProviderLocId?: number;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  serviceProviderLocName?: string | null;
  openingTimesMF?: string | null;
  openingTimesSat?: string | null;
  openingTimesSun?: string | null;
  openingTimesBankHolidays?: string | null;
  isCurrentlyOpen?: boolean;
  opensClosesIn?: string | null;
}

export interface PagedResult {
  queryable?: any[] | null;
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageCount?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  rowCount?: number;
}

export interface PartWornListViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  sourceServiceRequestHeaderId?: number | null;
  /** @format int32 */
  customerGroupId?: number;
  /** @format int32 */
  serviceProviderLocId?: number;
  productSizeShort?: string | null;
  /** @format int32 */
  productMake?: number;
  productMakeDescription?: string | null;
  removalReason?: string | null;
  /** @format float */
  removalTread?: number;
  serialNo?: string | null;
  /** @format date-time */
  dateAddedToStock?: string | null;
  isRefitted?: boolean | null;
  customerGroupName?: string | null;
  serviceProviderLocName?: string | null;
  serviceProviderGroupName?: string | null;
  productNewRem?: string | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
}

export interface PartWornListViewModelPagedResultViewModel {
  items?: PartWornListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PoRefInputModel {
  /** @format int32 */
  id?: number;
  ref?: string | null;
}

/** @format int32 */
export enum PoRequestFormat {
  Value0 = 0,
  Value1 = 1,
}

export interface PortalRoleModel {
  id?: string | null;
  name?: string | null;
  normalizedName?: string | null;
  concurrencyStamp?: string | null;
  userRoles?: StringIdentityUserRole[] | null;
  users?: PortalUserModel[] | null;
}

export interface PortalUserInputModel {
  /** @minLength 1 */
  userName: string;
  password?: string | null;
  /** @minLength 1 */
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocationId?: number | null;
  /** @format int32 */
  serviceProviderId?: number | null;
  /** @format int32 */
  serviceProviderLocationId?: number | null;
  /** @format int32 */
  casingCollectionAgencyId?: number | null;
  isActive?: boolean;
  isAdmin?: boolean;
  passwordResetHash?: string | null;
  /** @format date-time */
  passwordResetHashExpiry?: string;
  resetRequired?: boolean;
  canSeeGroup?: boolean;
  canSeeRetail?: boolean;
}

export interface PortalUserListViewModel {
  users?: PortalUserViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PortalUserModel {
  id?: string | null;
  normalizedUserName?: string | null;
  normalizedEmail?: string | null;
  emailConfirmed?: boolean;
  passwordHash?: string | null;
  securityStamp?: string | null;
  concurrencyStamp?: string | null;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  /** @format date-time */
  lockoutEnd?: string | null;
  lockoutEnabled?: boolean;
  /** @format int32 */
  accessFailedCount?: number;
  /** @minLength 1 */
  userName: string;
  /** @minLength 1 */
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocationId?: number | null;
  /** @format int32 */
  serviceProviderId?: number | null;
  /** @format int32 */
  serviceProviderLocationId?: number | null;
  /** @format int32 */
  casingCollectionAgencyId?: number | null;
  isActive?: boolean;
  isAdmin?: boolean;
  refreshToken?: string | null;
  /** @format date-time */
  refreshTokenExpiryTime?: string | null;
  passwordResetHash?: string | null;
  /** @format date-time */
  passwordResetHashExpiry?: string | null;
  /** @format date-time */
  lastLoggedIn?: string | null;
  resetRequired?: boolean | null;
  phoneNumber?: string | null;
  customerGroup?: CustomerGroup;
  customerLocation?: CustomerLocation;
  serviceProviderGroup?: ServiceProviderGroup;
  serviceProviderLocation?: ServiceProviderLocation;
  casingCollectionAgency?: ProductMake;
  userRoles?: StringIdentityUserRole[] | null;
  roles?: PortalRoleModel[] | null;
}

export interface PortalUserViewModel {
  id?: string | null;
  userName?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  fullName?: string | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocationId?: number | null;
  customerLocationName?: string | null;
  customerGroupName?: string | null;
  /** @format int32 */
  serviceProviderId?: number | null;
  serviceProviderGroupName?: string | null;
  /** @format int32 */
  serviceProviderLocationId?: number | null;
  serviceProviderLocName?: string | null;
  serviceProviderLocation?: string | null;
  /** @format int32 */
  casingCollectionAgencyId?: number | null;
  casingCollectionAgencyName?: string | null;
  isActive?: boolean;
  isAdmin?: boolean;
  /** @format date-time */
  lastLoggedIn?: string | null;
  roles?: PortalRoleModel[] | null;
}

export interface PortalUserViewModelPagedResultViewModel {
  items?: PortalUserViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PrepaymentPost {
  /** @format date-time */
  paymentDateDue?: string;
  input?: PurchaseLedgerListViewModelPagedResultViewModel;
}

export interface PrepaymentStatusHistory {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  prePayID?: number;
  /** @format int32 */
  statusID?: number;
  /** @format date-time */
  dateTimeChanged?: string;
  /** @format int32 */
  changedBy?: number;
  accountsPurchasePrePayments?: AccountsPurchasePrePayments;
  prepaymentStatuses?: PrepaymentStatuses;
  changedByUserInfo?: UserInformation;
}

export interface PrepaymentStatuses {
  /** @format int32 */
  statusId?: number;
  description?: string | null;
  prepaymentStatusHistorys?: PrepaymentStatusHistory[] | null;
}

export interface PrepaymentSummaryViewModel {
  /** @format int32 */
  prepayId?: number;
  supplierGroup?: string | null;
  /** @format double */
  paymentTotal?: number;
  /** @format date-time */
  paymentDueDate?: string;
  status?: string | null;
  statusActionedBy?: string | null;
}

export interface PrepaymentSummaryViewModelPagedResultViewModel {
  items?: PrepaymentSummaryViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PrepaymentViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  prepayId?: number;
  supplierGroup?: string | null;
  /** @format int32 */
  supplierGroupID?: number;
  /** @format double */
  paymentAmount?: number;
  /** @format double */
  balance?: number;
  /** @format double */
  balancePrepaid?: number;
  /** @format date-time */
  paymentDueDate?: string;
  status?: string | null;
  statusActionedBy?: string | null;
  reference?: string | null;
}

export interface PrepaymentViewModelPagedResultViewModel {
  items?: PrepaymentViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PrintRequestInputModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  emailId?: number | null;
}

export interface Product {
  productRef?: string | null;
  productDescription?: string | null;
  productSizeShort?: string | null;
  productRating?: string | null;
  /** @format int32 */
  productGroup?: number | null;
  /** @format int32 */
  productSubGroup?: number | null;
  /** @format int32 */
  productMake?: number | null;
  /** @format date-time */
  dateAdded?: string | null;
  productFuelRating?: string | null;
  productWetRating?: string | null;
  productNoiseRating?: string | null;
  active?: boolean | null;
  caiNumber?: string | null;
  /** @format double */
  treadDepth?: number | null;
  /** @format int32 */
  productNoiseClass?: number | null;
  pattern?: string | null;
  supplier?: string | null;
  /** @format int32 */
  seasonId?: number | null;
  productGroupObj?: ProductGroup;
  productSize?: ProductSize;
  productSubGroupObj?: ProductSubGroup;
  productMakeObj?: ProductMake;
  price?: CustomerPricesGpl;
  season?: ProductSeason;
}

export interface ProductDetailViewModel {
  productSizeShort?: string | null;
  productMakeObj?: ProductMake;
}

export interface ProductGroup {
  /** @format int32 */
  productGroup1?: number;
  productGroupDescription?: string | null;
  productGroupType?: string | null;
  productGroupShort?: string | null;
  productGroupTypeObj?: ProductGroupType;
}

export interface ProductGroupType {
  productGroupType1?: string | null;
  productGroupTypeDesc?: string | null;
  /** @format int32 */
  displayOrder?: number | null;
}

export interface ProductInputModel {
  /** @format int32 */
  productGroup?: number | null;
  /** @format int32 */
  productMake?: number | null;
  description?: string | null;
  caiNumber?: string | null;
  productSize?: string | null;
  /** @format int32 */
  productSubGroup?: number | null;
  pattern?: string | null;
  rating?: string | null;
  fuelRating?: string | null;
  wetGripRating?: string | null;
  noiseRating?: string | null;
  /** @format int32 */
  noise?: number | null;
  speedRating?: string | null;
  /** @format double */
  treadDepth?: number;
  isTyre?: boolean;
  /** @format int32 */
  seasonId?: number | null;
}

export interface ProductMake {
  /** @format int32 */
  productMake1?: number;
  productMakeDescription?: string | null;
  casingAdviceNoteHeader?: CasingAdviceNoteHeader;
  casingCollectionUsers?: CasingCollectionUser[] | null;
  serviceRequestLines?: ServiceRequestLine[] | null;
  casingCollectionRequests?: CasingCollectionRequest[] | null;
}

export interface ProductMakeInput {
  name?: string | null;
}

export interface ProductRatingInputModel {
  productRef?: string | null;
  productFuelRating?: string | null;
  productWetRating?: string | null;
  productNoiseRating?: string | null;
  productSpeedRating?: string | null;
}

export interface ProductSeason {
  /** @format int32 */
  seasonId?: number;
  seasonDescription?: string | null;
  customerSLAPolicyFitments?: CustomerSLAPolicyFitment[] | null;
}

export interface ProductSize {
  productSizeShort?: string | null;
  productDiameter?: string | null;
  productAspect?: string | null;
  productRim?: string | null;
  /** @format int32 */
  uniqueId?: number | null;
  /** @format date-time */
  dateAdded?: string | null;
  products?: Product[] | null;
}

export interface ProductSizeInput {
  productSizeShort?: string | null;
  productDiameter?: string | null;
  productAspect?: string | null;
  productRim?: string | null;
  /** @format int32 */
  uniqueId?: number | null;
  /** @format date-time */
  dateAdded?: string | null;
  products?: Product[] | null;
  dimensionSplit?: string | null;
}

export interface ProductSubGroup {
  /** @format int32 */
  productSubGroup1?: number;
  productSubGroupDescription?: string | null;
}

export interface ProviderEmailInputModel {
  /** @format int32 */
  id?: number;
  emailAddress?: string | null;
  /** @format int32 */
  agreedTyreMake?: number;
  eta?: string | null;
  agreedCallout?: string | null;
}

export interface PurchaseLedgerHeaderViewModel {
  /** @format int32 */
  id?: number;
  serviceProviderLocName?: string | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  serviceProviderGroupName?: string | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  summary?: string | null;
  /** @format double */
  netValue?: number | null;
  /** @format double */
  vatValue?: number | null;
  /** @format double */
  vatRate?: number | null;
  /** @format double */
  grossValue?: number | null;
  jobNumber?: string | null;
  /** @format date-time */
  postingDate?: string | null;
}

export interface PurchaseLedgerListViewModel {
  /** @format int32 */
  id?: number;
  plRef?: string | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  spRef?: string | null;
  /** @format double */
  grossValue?: number | null;
  /** @format date-time */
  paymentDate?: string | null;
  postingType?: string | null;
  /** @format date-time */
  postingDate?: string | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  /** @format int32 */
  serviceProviderGroupLocationId?: number | null;
  /** @format double */
  balance?: number | null;
  /** @format double */
  prepaidBalance?: number | null;
  /** @format double */
  payment?: number | null;
  isPaid?: string | null;
  isPrepaid?: string | null;
  paymentReference?: string | null;
  serviceProviderGroupName?: string | null;
  poNumber?: string | null;
  authorisationType?: string | null;
}

export interface PurchaseLedgerListViewModelPagedResultViewModel {
  items?: PurchaseLedgerListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PurchaseLedgerPaymentsListViewModel {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  paymentDate?: string | null;
  paymentChequeNo?: string | null;
  paymentReference?: string | null;
  paymentMadeBy?: string | null;
  /** @format double */
  paymentGross?: number | null;
}

export interface PurchaseLedgerPaymentsListViewModelPagedResultViewModel {
  items?: PurchaseLedgerPaymentsListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface RefusalLogViewModel {
  reason?: string | null;
  contactName?: string | null;
  /** @format date-time */
  refusalDate?: string;
  /** @format date-time */
  refusalTime?: string;
  serviceProviderLocationName?: string | null;
  userName?: string | null;
  serviceProviderLocTelephone?: string | null;
  serviceProviderLocId?: string | null;
}

export interface RemovalReason {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface ReplacementReason {
  /** @format int32 */
  replacementReasonId?: number;
  /** @format int32 */
  productGroup?: number | null;
  replacementDescriptions?: string | null;
  includeManufacturers?: boolean | null;
  includeMajorRepairList?: boolean | null;
  includeCentreStock?: boolean | null;
  additionalDest1Desc?: string | null;
  /** @format int32 */
  additionalDest1Id?: number | null;
  additionalDest2Desc?: string | null;
  /** @format int32 */
  additionalDest2Id?: number | null;
  hitachiRemCode?: string | null;
  hitachiDamCode?: string | null;
  hitachiDamCode1Byte?: string | null;
  isWorn?: boolean | null;
  /** @format int32 */
  pkId?: number;
}

export interface ReportBuilderDatasetRequest {
  datasetName?: string | null;
  columnList?: string | null;
  sort?: string | null;
  direction?: string | null;
  filters?: string[] | null;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  itemsPerPage?: number;
  getAll?: boolean;
  emailRecipients?: string | null;
}

export interface ReportBuilderReport {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  userId?: number | null;
  /** @format int32 */
  reportTypeId?: number;
  name?: string | null;
  datasetName?: string | null;
  columns?: string | null;
  sortColumn?: string | null;
  sortDirection?: string | null;
  /** @format date-time */
  dateCreated?: string;
  /** @format date-time */
  dateEdited?: string | null;
  /** @format int32 */
  createdByUserId?: number;
  filters?: ReportBuilderReportFilter[] | null;
  schedules?: ReportBuilderSchedule[] | null;
  user?: ReportBuilderUserInformation;
  isOwner?: boolean;
}

export interface ReportBuilderReportFilter {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  reportId?: number;
  clause?: string | null;
  /** @format date-time */
  dateCreated?: string;
  /** @format int32 */
  createdByUserId?: number | null;
  columnName?: string | null;
  type?: string | null;
  values?: string | null;
}

export interface ReportBuilderSchedule {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  reportId?: number;
  name?: string | null;
  /** @format int32 */
  runEvery?: number;
  /** @format date-time */
  startingAt?: string;
  toRecipients?: string | null;
  ccRecipients?: string | null;
  bccRecipients?: string | null;
  /** @format int32 */
  interval?: number;
}

export interface ReportBuilderUserInformation {
  firstName?: string | null;
  lastName?: string | null;
  fullname?: string | null;
  emailAddress?: string | null;
}

/** @format int32 */
export enum ReportType {
  Value1 = 1,
  Value2 = 2,
}

export interface ResolvedIdealAddress {
  result?: Result;
  /** @format int32 */
  code?: number;
  message?: string | null;
  geolocationGuid?: string | null;
}

export interface Result {
  postcode?: string | null;
  postcodeInward?: string | null;
  postcodeOutward?: string | null;
  postTown?: string | null;
  dependantLocality?: string | null;
  doubleDependantLocality?: string | null;
  thoroughfare?: string | null;
  dependantThoroughfare?: string | null;
  buildingNumber?: string | null;
  buildingName?: string | null;
  subBuildingName?: string | null;
  poBox?: string | null;
  departmentName?: string | null;
  organisationName?: string | null;
  /** @format int64 */
  udprn?: number;
  postcodeType?: string | null;
  suOrganisationIndicator?: string | null;
  deliveryPointSuffix?: string | null;
  line1?: string | null;
  line2?: string | null;
  line3?: string | null;
  premise?: string | null;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format int32 */
  eastings?: number;
  /** @format int32 */
  northings?: number;
  country?: string | null;
  traditionalCounty?: string | null;
  administrativeCounty?: string | null;
  postalCounty?: string | null;
  county?: string | null;
  district?: string | null;
  ward?: string | null;
  uprn?: string | null;
  id?: string | null;
  countryIso?: string | null;
  countryIso2?: string | null;
  countyCode?: string | null;
  language?: string | null;
  umprn?: string | null;
  dataset?: string | null;
}

export interface SPPCasingAdviceNoteHeaderDetailViewModel {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number;
  /** @format date-time */
  casingAdviceNoteDate?: string | null;
  serviceProviderLocName?: string | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  serviceProviderLocAddress1?: string | null;
  serviceProviderLocAddress2?: string | null;
  serviceProviderLocAddress3?: string | null;
  serviceProviderLocAddress4?: string | null;
  serviceProviderLocCounty?: string | null;
  serviceProviderLocPostcode1?: string | null;
  serviceProviderLocPostcode2?: string | null;
  serviceProviderLocCountry?: string | null;
  /** @format date-time */
  casingAdviceNoteCollectedByAgencyDate?: string | null;
  /** @format date-time */
  casingAdviceNoteAuditedDate?: string | null;
  /** @format int32 */
  serviceRequestNum?: number;
  casingAdviceNoteLines?: SPPCasingAdviceNoteLineDetailViewModel[] | null;
  casingAdviceNoteCollectionAgency?: SPPProductMakeDetailViewModel;
}

export interface SPPCasingAdviceNoteHeaderListViewModel {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number;
  /** @format date-time */
  casingAdviceNoteDate?: string | null;
  serviceProviderLocName?: string | null;
  /** @format int32 */
  serviceRequestNum?: number;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
}

export interface SPPCasingAdviceNoteHeaderListViewModelPagedResultViewModel {
  items?: SPPCasingAdviceNoteHeaderListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface SPPCasingAdviceNoteLineDetailViewModel {
  /** @format int32 */
  casingAdviceNoteHeaderId?: number | null;
  /** @format int32 */
  casingAdviceNoteLineId?: number;
  casingReviewed?: boolean | null;
  /** @format date-time */
  casingReviewDate?: string | null;
  /** @format date-time */
  casingQueryResolvedDate?: string | null;
  serviceRequestLine?: SPPServiceRequestLineDetailViewModel;
  casingReviewResult?: SPPCasingReviewResultDetailViewModel;
}

export interface SPPCasingCollectionAgenciesViewModel {
  casingCollectionAgencies?: SPPProductMakeDetailViewModel[] | null;
  /** @format int32 */
  nominatedCasingCollectionAgencyId?: number | null;
}

export interface SPPCasingReviewResultDetailViewModel {
  /** @format int32 */
  casingReviewResultId?: number;
  casingReviewResultDescription?: string | null;
}

export interface SPPCustomerLocationDetailViewModel {
  customerLocName?: string | null;
}

export interface SPPJobsListViewModel {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  customerGroupName?: string | null;
  customerLocationName?: string | null;
  /** @format date-time */
  signOffDate?: string;
  /** @format double */
  netValue?: number;
  /** @format double */
  vatValue?: number;
  /** @format double */
  grossValue?: number;
  selfBillingInQuery?: boolean;
  selfBillingIsQueryResolved?: boolean;
  vehicleReg?: string | null;
  vehicleAxleConfigDescription?: string | null;
  /** @format date-time */
  deployedDate?: string | null;
  /** @format date-time */
  deployedTime?: string | null;
  hasJobSheet?: boolean;
  attention?: boolean;
  status?: string | null;
}

export interface SPPNoticesListViewModel {
  /** @format int32 */
  id?: number | null;
  /** @format date-time */
  noticeDate?: string | null;
  noticeDesc?: string | null;
  noticeRead?: boolean | null;
  createdBy?: string | null;
}

export interface SPPProductDetailViewModel {
  /** @format int32 */
  productMake?: number | null;
  productSizeShort?: string | null;
  productMakeObj?: SPPProductMakeDetailViewModel;
}

export interface SPPProductMakeDetailViewModel {
  /** @format int32 */
  productMake1?: number | null;
  productMakeDescription?: string | null;
}

export interface SPPProductsListViewModel {
  productDescription?: string | null;
  /** @format double */
  price?: number | null;
}

export interface SPPProductsListViewModelPagedResultViewModel {
  items?: SPPProductsListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface SPPServiceRequestHeaderDetailViewModel {
  /** @format date-time */
  initialRequestDate?: string | null;
  /** @format date-time */
  signOffDate?: string | null;
  customerLocation?: SPPCustomerLocationDetailViewModel;
}

export interface SPPServiceRequestLineDetailViewModel {
  /** @format int32 */
  serviceRequestLineId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  serialOff?: string | null;
  /** @format float */
  removalTread?: number | null;
  removalReason?: string | null;
  /** @format int32 */
  removalManufacturer?: number | null;
  removalNew?: string | null;
  product?: SPPProductDetailViewModel;
  removalMake?: SPPProductMakeDetailViewModel;
  serviceRequestHeader?: SPPServiceRequestHeaderDetailViewModel;
}

export interface SPPServiceRequestLineListViewModel {
  /** @format int32 */
  serviceRequestLineId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  removalNew?: string | null;
  /** @format float */
  removalTread?: number | null;
  serialOff?: string | null;
  removalReason?: string | null;
  serviceRequestHeader?: SPPServiceRequestHeaderDetailViewModel;
  product?: SPPProductDetailViewModel;
  removalMake?: SPPProductMakeDetailViewModel;
}

export interface SPPServiceRequestViewModel {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format int32 */
  serviceRequestGroupId?: number | null;
  authorisationType?: string | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  customerFleetListId?: number | null;
  initialCallerName?: string | null;
  initialCallerTel?: string | null;
  initialOrderNo?: string | null;
  initialTrailerId?: string | null;
  initialVehicleLocation?: string | null;
  initialVehicleDestination?: string | null;
  initialLocationCategory?: string | null;
  initialRequestSummary?: string | null;
  /** @format int32 */
  initialVehicleAvailability?: number | null;
  initialRequestType?: string | null;
  /** @format date-time */
  initialRequestDate?: string | null;
  /** @format date-time */
  initialRequestTime?: string | null;
  /** @format int32 */
  initialRequestUserId?: number | null;
  initialThirdPartyCustomerName?: string | null;
  jobSheetLocation?: string | null;
  deployedIsDeployed?: boolean | null;
  /** @format int32 */
  deployedServiceLocId?: number | null;
  /** @format int32 */
  deployedServiceLocEta?: number | null;
  /** @format date-time */
  deployedServiceLocToa?: string | null;
  /** @format date-time */
  deployedServiceLocDoa?: string | null;
  /** @format date-time */
  deployedServiceLocToc?: string | null;
  /** @format date-time */
  deployedServiceLocDoc?: string | null;
  /** @format int32 */
  deployedAgreedMake?: number | null;
  supplierJobRef?: string | null;
  deployedUserName?: string | null;
  /** @format date-time */
  deployedDate?: string | null;
  /** @format date-time */
  deployedTime?: string | null;
  deployedFitterMobileNo?: string | null;
  signOffSignedOff?: boolean | null;
  /** @format int32 */
  signOffUserId?: number | null;
  signOffUserName?: string | null;
  /** @format date-time */
  signOffDate?: string | null;
  /** @format date-time */
  signOffTime?: string | null;
  requestCancelled?: boolean | null;
  vehicleTacho?: string | null;
  spAwaitingSignoff?: boolean | null;
  spSignedOff?: boolean | null;
  /** @format date-time */
  spSignOffDate?: string | null;
  /** @format date-time */
  spSignOffTime?: string | null;
  policyTyresFitted?: boolean | null;
  /** @format date-time */
  prebookedDate?: string | null;
  isLegal?: boolean | null;
  /** @format int32 */
  tyresRequested?: number | null;
  tyreType?: string | null;
  /** @format date-time */
  etabefore?: string | null;
  /** @format date-time */
  updatedEta?: string | null;
  /** @format int32 */
  etaMinutes?: number | null;
  maxEtaTime?: TimeSpan;
  customerGroupName?: string | null;
  customerLocName?: string | null;
  /** @format int32 */
  customerLocServiceProviderLocId?: number;
  serviceProviderLocCounty?: string | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  serviceProviderLocName?: string | null;
  serviceProviderLocTelephone?: string | null;
  serviceProviderGroupName?: string | null;
  initialRequestUserName?: string | null;
  vehicleAxleConfigDescription?: string | null;
  vehicleReg?: string | null;
  vehicleAvailability?: string | null;
  eta?: string | null;
  agreedMakeName?: string | null;
  customerJobNumber?: string | null;
  isFrozen?: boolean | null;
  agreedDeployCallout?: string | null;
  geolocationGUID?: string | null;
  geolocation?: GeographyGeolocation;
  vehicleClassification?: string | null;
  jobItems?: CPJobItemViewModel[] | null;
  vehicleDetails?: CpVehicleViewModel;
  selfBillable?: boolean | null;
  invoiceReceived?: boolean | null;
}

export interface SPPSignOffInputModel {
  serviceRequestHeaderId?: string | null;
  supplierJobNumber?: string | null;
  vehicleTacho?: string | null;
  vehicleLocked?: boolean;
  /** @format date-time */
  dtDOA?: string | null;
  dtTOA?: string | null;
  /** @format date-time */
  dtDOC?: string | null;
  dtTOC?: string | null;
  policyTyresFitted?: boolean;
  schematicData?: SchematicData[] | null;
}

export interface SalesLedgerHeaderViewModel {
  /** @format int32 */
  id?: number;
  customerLocName?: string | null;
  /** @format int32 */
  customerLocId?: number | null;
  customerGroupName?: string | null;
  /** @format int32 */
  customerGroupId?: number | null;
  summary?: string | null;
  /** @format double */
  netValue?: number | null;
  /** @format double */
  vatValue?: number | null;
  /** @format double */
  vatRate?: number | null;
  /** @format double */
  grossValue?: number | null;
  jobNumber?: string | null;
  /** @format date-time */
  postingDate?: string | null;
}

export interface SalesLedgerListViewModel {
  /** @format int32 */
  id?: number;
  slRef?: string | null;
  /** @format int32 */
  ivRef?: number | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  spRef?: number | null;
  /** @format double */
  grossValue?: number | null;
  /** @format date-time */
  paymentDate?: string | null;
  postingType?: string | null;
  /** @format date-time */
  postingDate?: string | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerGroupLocationId?: number | null;
  /** @format double */
  balance?: number | null;
  /** @format double */
  payment?: number | null;
  isPaid?: string | null;
  paymentReference?: string | null;
  isPrinted?: boolean | null;
  customerGroupName?: string | null;
  poNumber?: string | null;
}

export interface SalesLedgerListViewModelPagedResultViewModel {
  items?: SalesLedgerListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface SalesLedgerPaymentsListViewModel {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  paymentDate?: string | null;
  paymentChequeNo?: string | null;
  paymentReference?: string | null;
  paymentMadeBy?: string | null;
  /** @format double */
  paymentGross?: number | null;
}

export interface SalesLedgerPaymentsListViewModelPagedResultViewModel {
  items?: SalesLedgerPaymentsListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface SchematicData {
  size?: string | null;
  manufacturer?: SelectListViewModel;
  construction?: string | null;
  regrooved?: string | null;
  /** @format int32 */
  innerDepth?: number;
  /** @format int32 */
  treadDepth?: number;
  /** @format int32 */
  outerDepth?: number;
  serialOn?: string | null;
  inspectionComplete?: boolean;
  positionCode?: string | null;
  axlePos?: string | null;
}

export interface SearchInputModel {
  query?: string | null;
}

export interface SecurityJobRole {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  securityLevel?: number;
  /** @format int32 */
  parentId?: number | null;
  /** @format int32 */
  sortOrder?: number | null;
  securityJobRoleRoles?: SecurityJobRoleRole[] | null;
  users?: UserInformation[] | null;
  parentSecurityJobRole?: SecurityJobRole;
}

export interface SecurityJobRoleRole {
  /** @format int32 */
  securityJobRoleId?: number;
  /** @format int32 */
  securityRoleId?: number;
  securityJobRole?: SecurityJobRole;
  securityRole?: SecurityRole;
}

export interface SecurityRole {
  /** @format int32 */
  id?: number;
  roleName?: string | null;
  roleDescription?: string | null;
  roleGroup?: string | null;
  roleItem?: string | null;
  roleFunction?: string | null;
  securityJobRoleRoles?: SecurityJobRoleRole[] | null;
}

export interface SelectListViewModel {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface SelfBillingInputModel {
  supplierRef?: string | null;
  /** @format date-time */
  invoiceDate?: string;
  /** @format double */
  totalNet?: number;
  /** @format double */
  totalVat?: number;
}

export interface SelfBillingQueryViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  selfBillingIsSelfBillingInvoice?: boolean | null;
  selfBillingInQuery?: boolean | null;
  selfBillingIsQueryResolved?: boolean | null;
  selfBillingQuery?: string | null;
  /** @format date-time */
  selfBillingQueryDate?: string | null;
  serviceProviderQueryComments?: ServiceProviderQueryCommentViewModel[] | null;
}

export interface SequalizerExportInput {
  sql?: string | null;
  param?: GetParameters;
  exportType?: ExportType;
}

export interface SequalizerInput {
  sql?: string | null;
  param?: GetParameters;
}

export interface SequalizerStoredProcedure {
  /** @format int32 */
  id?: number;
  name?: string | null;
  sql?: string | null;
  /** @format int32 */
  userId?: number;
}

export interface ServiceOperatingCentres {
  /** @format int32 */
  id?: number;
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  address: string;
  /** @format int32 */
  phoneNumber?: number;
  /** @minLength 1 */
  operation: string;
}

export interface ServiceProviderEtum {
  /** @format int32 */
  etaid?: number;
  etaDescription?: string | null;
  /** @format int32 */
  etaMinutes?: number | null;
  /** @format int32 */
  etaDisplayOrder?: number | null;
  active?: boolean | null;
  etaTextDescription?: string | null;
  minEtaTime?: TimeSpan;
  maxEtaTime?: TimeSpan;
}

export interface ServiceProviderGroup {
  /** @format int32 */
  serviceProviderGroupId?: number;
  /** @format int32 */
  supplierTypeId?: number | null;
  serviceProviderGroupName?: string | null;
  serviceProviderGroupAddress1?: string | null;
  serviceProviderGroupAddress2?: string | null;
  serviceProviderGroupAddress3?: string | null;
  serviceProviderGroupAddress4?: string | null;
  serviceProviderGroupCounty?: string | null;
  serviceProviderGroupPostcode1?: string | null;
  serviceProviderGroupPostcode2?: string | null;
  serviceProviderGroupCountry?: string | null;
  serviceProviderGroupPrimaryName?: string | null;
  serviceProviderGroupPrimaryTelephone?: string | null;
  serviceProviderGroupPrimaryFax?: string | null;
  serviceProviderGroupPrimaryEmail?: string | null;
  serviceProviderGroupSecondaryName?: string | null;
  serviceProviderGroupSecondaryTelephone?: string | null;
  serviceProviderGroupSecondaryFax?: string | null;
  serviceProviderGroupSecondaryEmail?: string | null;
  serviceProviderGroupActive?: boolean | null;
  serviceProviderGroupAccountNumber?: string | null;
  /** @format int32 */
  serviceProviderGroupSupplierTermsDays?: number | null;
  serviceProviderGroupBankName?: string | null;
  serviceProviderGroupBankSortCode1?: string | null;
  serviceProviderGroupBankSortCode2?: string | null;
  serviceProviderGroupBankSortCode3?: string | null;
  serviceProviderGroupBankAccountNo?: string | null;
  serviceProviderGroupIsContraAccount?: boolean | null;
  /** @format int32 */
  serviceProviderGroupContractCustomerGroupId?: number | null;
  archive?: boolean | null;
  directTyreAllowExtras?: boolean | null;
  serviceProviderLocations?: ServiceProviderLocation[] | null;
  serviceProviderUsers?: ServiceProviderUser[] | null;
  casingCollectionRequests?: CasingCollectionRequest[] | null;
  contacts?: Contact[] | null;
}

export interface ServiceProviderGroupListViewModel {
  /** @format int32 */
  serviceProviderSuperGroupId?: number | null;
  /** @format int32 */
  serviceProviderGroupId?: number;
  serviceProviderGroupName?: string | null;
  serviceProviderGroupCounty?: string | null;
  serviceProviderGroupPostcode?: string | null;
  serviceProviderGroupCountry?: string | null;
  /** @format int32 */
  serviceProviderGroupCreditLimit?: number | null;
  /** @format int32 */
  supplierTermDays?: number | null;
  authorisationType?: string | null;
}

export interface ServiceProviderGroupListViewModelPagedResultViewModel {
  items?: ServiceProviderGroupListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ServiceProviderInputModel {
  /** @format int32 */
  id?: number | null;
  serviceProviderGroupName?: string | null;
  serviceProviderGroupAddress1?: string | null;
  serviceProviderGroupAddress2?: string | null;
  serviceProviderGroupAddress3?: string | null;
  serviceProviderGroupAddress4?: string | null;
  serviceProviderGroupCounty?: string | null;
  serviceProviderGroupCountry?: string | null;
  serviceProviderGroupPostcode1?: string | null;
  serviceProviderGroupPostcode2?: string | null;
  contacts?: ContactInputModel[] | null;
  location?: ServiceProviderLocationInputModel;
  locationFacilities?: ServiceProviderLocationFacilitiesInputModel;
  accountDetails?: AccountDetailsInputModel;
}

export interface ServiceProviderInsuranceInputModel {
  /** @format int32 */
  serviceProviderLocId?: number;
  insuranceEmployerInPlace: boolean;
  /** @minLength 1 */
  insuranceEmployerInsurer: string;
  /** @minLength 1 */
  insuranceEmployerPolicyNo: string;
  /** @format date-time */
  insuranceEmployerStartDate: string;
  /** @format date-time */
  insuranceEmployerEndDate: string;
  insurancePublicInPlace: boolean;
  /** @minLength 1 */
  insurancePublicInsurer: string;
  /** @minLength 1 */
  insurancePublicPolicyNo: string;
  /** @format date-time */
  insurancePublicStartDate: string;
  /** @format date-time */
  insurancePublicEndDate: string;
  healthSafetyManualReceivedElectronic?: boolean | null;
  healthSafetyManualReceivedHardCopy?: boolean | null;
  /** @format date-time */
  healthSafetyLastAuditDate?: string | null;
}

export interface ServiceProviderLocation {
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  /** @format int32 */
  serviceProviderLocId?: number;
  serviceProviderLocName?: string | null;
  serviceProviderLocAddress1?: string | null;
  serviceProviderLocAddress2?: string | null;
  serviceProviderLocAddress3?: string | null;
  serviceProviderLocAddress4?: string | null;
  serviceProviderLocCounty?: string | null;
  serviceProviderLocPostcode1?: string | null;
  serviceProviderLocPostcode2?: string | null;
  serviceProviderLocCountry?: string | null;
  serviceProviderLocManager?: string | null;
  serviceProviderLocAssManager?: string | null;
  serviceProviderLocTelephone?: string | null;
  serviceProviderLocFax?: string | null;
  serviceProviderCommunicationsEmailAddress?: string | null;
  serviceProviderLocEmail?: string | null;
  /** @format int32 */
  serviceProviderLocFittingStaff?: number | null;
  /** @format int32 */
  serviceProviderLocVehicles?: number | null;
  serviceProviderLocActive?: boolean | null;
  serviceProviderLocOpenMf?: string | null;
  serviceProviderLocOpenS?: string | null;
  serviceProviderLocOpenSs?: string | null;
  serviceProviderLocOpenBh?: string | null;
  serviceProviderLocCloseMf?: string | null;
  serviceProviderLocCloseS?: string | null;
  serviceProviderLocCloseSs?: string | null;
  serviceProviderLocCloseBh?: string | null;
  serviceProviderLocFacilityCarTyres?: boolean;
  serviceProviderLocFacilityVanTyres?: boolean;
  serviceProviderLocFacilityTruckTyres?: boolean;
  serviceProviderLocFacilityBrakes?: boolean;
  serviceProviderLocFacilityExhausts?: boolean;
  serviceProviderLocFacilityShocks?: boolean;
  serviceProviderLocFacilityBatteries?: boolean;
  serviceProviderLocFacilityMotlight?: boolean;
  serviceProviderLocFacilitySolid?: boolean;
  serviceProviderLocFacilityIndustrial?: boolean;
  serviceProviderLocFacilityAgricultural?: boolean | null;
  serviceProviderLocFacilityPlant?: boolean | null;
  serviceProviderLocFacilityMobileFittingCar?: boolean | null;
  serviceProviderLocFacilityCommercialWheelAlignment?: boolean | null;
  serviceProviderLocBreakdownNo1?: string | null;
  serviceProviderLocBreakdownNo2?: string | null;
  serviceProviderLocBreakdownNo3?: string | null;
  serviceProviderLocJobRefusalSmsNumber?: string | null;
  /** @format int32 */
  defaultNominalCode?: number | null;
  /** @format int32 */
  addedByUserId?: number | null;
  insuranceEmployerInPlace?: boolean | null;
  insuranceEmployerInsurer?: string | null;
  insuranceEmployerPolicyNo?: string | null;
  /** @format date-time */
  insuranceEmployerStartDate?: string | null;
  /** @format date-time */
  insuranceEmployerEndDate?: string | null;
  insurancePublicInPlace?: boolean | null;
  insurancePublicInsurer?: string | null;
  insurancePublicPolicyNo?: string | null;
  /** @format date-time */
  insurancePublicStartDate?: string | null;
  /** @format date-time */
  insurancePublicEndDate?: string | null;
  serviceProviderLocFacilityHankook?: boolean | null;
  serviceProviderLocFacilitySuperDealer?: boolean | null;
  healthSafetyManualReceivedElectronic?: boolean | null;
  healthSafetyManualReceivedHardCopy?: boolean | null;
  /** @format date-time */
  healthSafetyLastAuditDate?: string | null;
  allowServiceWorkToBeBookedOut?: boolean | null;
  allowSelfBillingFacility?: boolean | null;
  currentlyTradesWithDtm?: boolean | null;
  vatRegistrationNumber?: string | null;
  /** @format int32 */
  nominatedCasingCollectionId?: number | null;
  /** @format date-time */
  serviceProviderContactDetailsLastVerified?: string | null;
  /** @format int32 */
  networkManagerUserId?: number | null;
  archive?: boolean | null;
  linkedDocument?: string | null;
  notificationEmail?: boolean | null;
  notificationEmailRefusals?: boolean | null;
  serviceProviderGroup?: ServiceProviderGroup;
  accountsPurchaseLedgers?: AccountsPurchaseLedger[] | null;
  accountsPurchaseLedgerTests?: AccountsPurchaseLedgerTest[] | null;
  serviceRequestHeaders?: ServiceRequestHeader[] | null;
  serviceProviderUsers?: ServiceProviderUser[] | null;
  newServiceProviderUsers?: PortalUserModel[] | null;
  serviceProviderPartworns?: ServiceProviderPartworn[] | null;
}

export interface ServiceProviderLocationFacilitiesInputModel {
  /** @format int32 */
  numberOfFittingStaff?: number;
  /** @format int32 */
  numberOfVehicles?: number;
  /** @format int32 */
  serviceProviderLocFittingStaff?: number | null;
  /** @format int32 */
  serviceProviderLocVehicles?: number | null;
  openingTimes?: OpeningTimesViewModel;
  serviceProviderLocOpenMf?: string | null;
  serviceProviderLocOpenS?: string | null;
  serviceProviderLocOpenSs?: string | null;
  serviceProviderLocOpenBh?: string | null;
  serviceProviderLocCloseMf?: string | null;
  serviceProviderLocCloseS?: string | null;
  serviceProviderLocCloseSs?: string | null;
  serviceProviderLocCloseBh?: string | null;
  serviceProviderLocFacilityCarTyres?: boolean;
  serviceProviderLocFacilityVanTyres?: boolean;
  serviceProviderLocFacilityTruckTyres?: boolean;
  serviceProviderLocFacilityBrakes?: boolean;
  serviceProviderLocFacilityExhausts?: boolean;
  serviceProviderLocFacilityShocks?: boolean;
  serviceProviderLocFacilityBatteries?: boolean;
  serviceProviderLocFacilityMotlight?: boolean;
  serviceProviderLocFacilitySolid?: boolean;
  serviceProviderLocFacilityIndustrial?: boolean;
  serviceProviderLocFacilityAgricultural?: boolean | null;
  serviceProviderLocFacilityPlant?: boolean | null;
  serviceProviderLocFacilityMobileFittingCar?: boolean | null;
  serviceProviderLocFacilityCommercialWheelAlignment?: boolean | null;
  serviceProviderLocFacilityHankook?: boolean | null;
  serviceProviderLocFacilitySuperDealer?: boolean | null;
}

export interface ServiceProviderLocationInputModel {
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  /** @format int32 */
  serviceProviderLocId?: number;
  serviceProviderLocName?: string | null;
  serviceProviderLocAddress1?: string | null;
  serviceProviderLocAddress2?: string | null;
  serviceProviderLocAddress3?: string | null;
  serviceProviderLocAddress4?: string | null;
  serviceProviderLocCounty?: string | null;
  serviceProviderLocPostcode1?: string | null;
  serviceProviderLocPostcode2?: string | null;
  serviceProviderLocCountry?: string | null;
  serviceProviderLocManager?: string | null;
  serviceProviderLocAssManager?: string | null;
  serviceProviderLocTelephone?: string | null;
  serviceProviderLocFax?: string | null;
  serviceProviderCommunicationsEmailAddress?: string | null;
  serviceProviderLocEmail?: string | null;
  serviceProviderLocBreakdownNo1?: string | null;
  serviceProviderLocBreakdownNo2?: string | null;
  serviceProviderLocBreakdownNo3?: string | null;
  serviceProviderLocJobRefusalSmsNumber?: string | null;
  /** @format int32 */
  nominatedCasingCollectionId?: number | null;
  vatRegistrationNumber?: string | null;
  /** @format int32 */
  networkManagerUserId?: number | null;
  allowServiceWorkToBeBookedOut?: boolean | null;
  allowSelfBillingFacility?: boolean | null;
  /** @format int32 */
  defaultNominalCode?: number | null;
  /** @format int32 */
  addedByUserId?: number | null;
  healthSafetyManualReceivedElectronic?: boolean | null;
  healthSafetyManualReceivedHardCopy?: boolean | null;
  /** @format date-time */
  healthSafetyLastAuditDate?: string | null;
  currentlyTradesWithDtm?: boolean | null;
  /** @format date-time */
  serviceProviderContactDetailsLastVerified?: string | null;
  archive?: boolean | null;
  linkedDocument?: string | null;
  notificationEmail?: boolean | null;
  notificationEmailRefusals?: boolean | null;
  /** @format int32 */
  numberOfFittingStaff?: number;
  /** @format int32 */
  numberOfVehicles?: number;
  /** @format int32 */
  serviceProviderLocFittingStaff?: number | null;
  /** @format int32 */
  serviceProviderLocVehicles?: number | null;
  openingTimes?: OpeningTimesViewModel;
  serviceProviderLocOpenMf?: string | null;
  serviceProviderLocOpenS?: string | null;
  serviceProviderLocOpenSs?: string | null;
  serviceProviderLocOpenBh?: string | null;
  serviceProviderLocCloseMf?: string | null;
  serviceProviderLocCloseS?: string | null;
  serviceProviderLocCloseSs?: string | null;
  serviceProviderLocCloseBh?: string | null;
  serviceProviderLocFacilityCarTyres?: boolean;
  serviceProviderLocFacilityVanTyres?: boolean;
  serviceProviderLocFacilityTruckTyres?: boolean;
  serviceProviderLocFacilityBrakes?: boolean;
  serviceProviderLocFacilityExhausts?: boolean;
  serviceProviderLocFacilityShocks?: boolean;
  serviceProviderLocFacilityBatteries?: boolean;
  serviceProviderLocFacilityMotlight?: boolean;
  serviceProviderLocFacilitySolid?: boolean;
  serviceProviderLocFacilityIndustrial?: boolean;
  serviceProviderLocFacilityAgricultural?: boolean | null;
  serviceProviderLocFacilityPlant?: boolean | null;
  serviceProviderLocFacilityMobileFittingCar?: boolean | null;
  serviceProviderLocFacilityCommercialWheelAlignment?: boolean | null;
  serviceProviderLocFacilityHankook?: boolean | null;
  serviceProviderLocFacilitySuperDealer?: boolean | null;
}

export interface ServiceProviderLocationListViewModel {
  /** @format int32 */
  serviceProviderLocId?: number;
  serviceProviderLocName?: string | null;
  serviceProviderGroupName?: string | null;
  postCode?: string | null;
  serviceProviderLocTelephone?: string | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  servicesOffered?: string | null;
  isOpen?: boolean;
  opensClosesIn?: string | null;
  locationAddress?: string | null;
  serviceProviderLocAddress1?: string | null;
  serviceProviderLocAddress2?: string | null;
  serviceProviderLocAddress3?: string | null;
  serviceProviderLocAddress4?: string | null;
  serviceProviderLocPostcode1?: string | null;
  serviceProviderLocPostcode2?: string | null;
  locationCounty?: string | null;
  /** @format double */
  balance?: number;
  partWornAvailable?: boolean;
  carTyresServiceOffered?: boolean;
  vanTyresServiceOffered?: boolean;
  truckTyresServiceOffered?: boolean;
  brakesServiceOffered?: boolean;
  exhaustsServiceOffered?: boolean;
  shocksServiceOffered?: boolean;
  batteriesServiceOffered?: boolean;
  motLightServiceOffered?: boolean;
  solidServiceOffered?: boolean;
  industrialServiceOffered?: boolean;
  agriculturalServiceOffered?: boolean;
  plantServiceOffered?: boolean;
  /** @format double */
  distanceFromVehicleLoc?: number | null;
  /** @format double */
  distanceFromLoc?: number | null;
  /** @format int32 */
  eastings?: number;
  /** @format int32 */
  northings?: number;
  serviceProviderLocFacilityMobileFittingCar?: boolean;
  networkMembership?: string | null;
}

export interface ServiceProviderLocationListViewModelPagedResultViewModel {
  items?: ServiceProviderLocationListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ServiceProviderNoticeBoardListViewModel {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  noticeDate?: string | null;
  noticeDesc?: string | null;
  createdBy?: string | null;
}

export interface ServiceProviderNoticeBoardListViewModelPagedResultViewModel {
  items?: ServiceProviderNoticeBoardListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ServiceProviderPartworn {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  /** @format int32 */
  sourceServiceRequestHeaderId?: number | null;
  /** @format int32 */
  sourceServiceRequestLineId?: number | null;
  /** @format date-time */
  dateAddedToStock?: string | null;
  productSizeShort?: string | null;
  /** @format int32 */
  productMake?: number | null;
  productNewRem?: string | null;
  removalReason?: string | null;
  /** @format float */
  removalTread?: number | null;
  serialNo?: string | null;
  /** @format int32 */
  destServiceRequestHeaderId?: number | null;
  /** @format date-time */
  dateRefitted?: string | null;
  isRefitted?: boolean | null;
  transferedIn?: boolean | null;
  /** @format date-time */
  transferedInDate?: string | null;
  /** @format int32 */
  transferedInFromSpLocId?: number | null;
  /** @format int32 */
  transferedInUserId?: number | null;
  /** @format float */
  removalTread2?: number | null;
  /** @format float */
  removalTread3?: number | null;
  serviceProviderLocation?: ServiceProviderLocation;
  product?: ProductMake;
  customerGroup?: CustomerGroup;
}

export interface ServiceProviderQueryComment {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number;
  commentText?: string | null;
  /** @format int32 */
  tamsuserId?: number | null;
  /** @format int32 */
  serviceProviderUserId?: number | null;
  serviceProviderPortalUserId?: string | null;
  /** @format date-time */
  commentDateTime?: string;
  serviceRequestHeader?: ServiceRequestHeader;
  user?: UserInformation;
  serviceProviderUser?: ServiceProviderUser;
  portalUser?: PortalUserModel;
}

export interface ServiceProviderQueryCommentViewModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number;
  commentText?: string | null;
  /** @format int32 */
  tamsuserId?: number | null;
  /** @format int32 */
  serviceProviderUserId?: number | null;
  /** @format date-time */
  commentDateTime?: string;
  tamsUserName?: string | null;
  serviceProviderUserName?: string | null;
}

export interface ServiceProviderUser {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  serviceProviderUsername?: string | null;
  serviceProviderPassword?: string | null;
  /** @format int32 */
  loginCount?: number | null;
  /** @format date-time */
  lastLoginDate?: string | null;
  /** @format date-time */
  lastLoginTime?: string | null;
  /** @format int32 */
  loginAttempts?: number | null;
  lastLoginIp?: string | null;
  /** @format date-time */
  passwordLastChanged?: string | null;
  /** @format int32 */
  userLoginCreatedBy?: number | null;
  active?: boolean | null;
  requestPasswordChange?: boolean | null;
  userGuid?: string | null;
  /** @format date-time */
  lastAccess?: string | null;
  emailAddress?: string | null;
  /** @format int32 */
  lastEqhsseen?: number | null;
  /** @format int32 */
  canSeeGroup?: number | null;
  /** @format int32 */
  canSeeJobSheets?: number | null;
  canUploadJobSheets?: boolean | null;
  serviceProviderGroup?: ServiceProviderGroup;
  serviceProviderLocation?: ServiceProviderLocation;
}

export interface ServiceProviderUserInputModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  serviceProviderGroupId: number;
  /** @format int32 */
  serviceProviderLocId: number;
  /** @minLength 1 */
  serviceProviderUsername: string;
  /** @minLength 1 */
  serviceProviderPassword: string;
  /**
   * @format email
   * @minLength 1
   */
  emailAddress: string;
  active?: boolean | null;
  canSeeGroup?: boolean | null;
  canSeeJobSheets?: boolean | null;
  canUploadJobSheets?: boolean | null;
  /** @format date-time */
  lastLoginDate?: string | null;
  /** @format date-time */
  lastLoginTime?: string | null;
}

export interface ServiceRequestComment {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format date-time */
  commentDate?: string | null;
  /** @format date-time */
  commentTime?: string | null;
  /** @format int32 */
  uniqueId?: number | null;
  comment?: string | null;
  commentType?: string | null;
  archive?: boolean | null;
  user?: UserInformation;
}

export interface ServiceRequestCommentViewModel {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  commentDate?: string | null;
  /** @format date-time */
  commentTime?: string | null;
  comment?: string | null;
  commentType?: string | null;
  userName?: string | null;
}

export interface ServiceRequestContact {
  /** @format int32 */
  serviceRequestContactId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format int32 */
  contactTypeId?: number;
  title?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  emailRefused?: boolean;
  telephone?: string | null;
  contactType?: ServiceRequestContactType;
  serviceRequestHeader?: ServiceRequestHeader;
}

export interface ServiceRequestContactDetailViewModel {
  /** @format int32 */
  serviceRequestContactId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format int32 */
  contactTypeId?: number;
  title?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  telephone?: string | null;
}

export interface ServiceRequestContactType {
  /** @format int32 */
  contactTypeId?: number;
  friendlyName?: string | null;
}

export interface ServiceRequestDetailViewModel {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format int32 */
  serviceRequestGroupId?: number | null;
  authorisationType?: string | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  customerFleetListId?: number | null;
  initialCallerName?: string | null;
  initialCallerTel?: string | null;
  initialOrderNo?: string | null;
  initialTrailerId?: string | null;
  initialVehicleLocation?: string | null;
  initialVehicleDestination?: string | null;
  initialLocationCategory?: string | null;
  initialLocationCategoryLong?: string | null;
  initialRequestSummary?: string | null;
  /** @format int32 */
  initialVehicleAvailability?: number | null;
  initialRequestType?: string | null;
  /** @format date-time */
  initialRequestDate?: string | null;
  /** @format date-time */
  initialRequestTime?: string | null;
  /** @format int32 */
  initialRequestUserId?: number | null;
  initialThirdPartyCustomerName?: string | null;
  deployedIsDeployed?: boolean | null;
  /** @format int32 */
  deployedServiceLocId?: number | null;
  /** @format int32 */
  deployedServiceLocEta?: number | null;
  /** @format date-time */
  deployedServiceLocToa?: string | null;
  /** @format date-time */
  deployedServiceLocDoa?: string | null;
  /** @format date-time */
  deployedServiceLocToc?: string | null;
  /** @format date-time */
  deployedServiceLocDoc?: string | null;
  /** @format int32 */
  deployedAgreedMake?: number | null;
  supplierJobRef?: string | null;
  /** @format int32 */
  deployedUserId?: number | null;
  /** @format date-time */
  deployedDate?: string | null;
  /** @format date-time */
  deployedTime?: string | null;
  deployedFitterMobileNo?: string | null;
  signOffSignedOff?: boolean | null;
  /** @format int32 */
  signOffUserId?: number | null;
  /** @format date-time */
  signOffDate?: string | null;
  /** @format date-time */
  signOffTime?: string | null;
  requestCancelled?: boolean | null;
  requestCancelledReason?: string | null;
  /** @format int32 */
  requestCancelledUserId?: number | null;
  vehicleTacho?: string | null;
  vehicleIdReallocated?: boolean | null;
  comments?: string | null;
  authorisationSuffix?: string | null;
  spAwaitingSignoff?: boolean | null;
  spSignedOff?: boolean | null;
  /** @format date-time */
  spSignOffDate?: string | null;
  /** @format date-time */
  spSignOffTime?: string | null;
  spAuthGivenToProvider?: boolean | null;
  isIdentifiedForRecharge?: boolean | null;
  isPrinted?: boolean | null;
  forArchive?: boolean | null;
  policyTyresFitted?: boolean | null;
  /** @format date-time */
  prebookedDate?: string | null;
  isLegal?: boolean | null;
  /** @format int32 */
  tyresRequested?: number | null;
  /** @format date-time */
  invoicePrintedOn?: string | null;
  tyreType?: string | null;
  /** @format date-time */
  etabefore?: string | null;
  /** @format date-time */
  updatedEta?: string | null;
  jobSheetLocation?: string | null;
  serviceProviderInvoiceNumber?: string | null;
  hasSelfBillingQuery?: boolean;
  /** @format int32 */
  etaMinutes?: number | null;
  maxEtaTime?: TimeSpan;
  customerGroupName?: string | null;
  customerGroup?: CustomerGroup;
  customerLocName?: string | null;
  /** @format int32 */
  customerLocServiceProviderLocId?: number;
  serviceProviderLocCounty?: string | null;
  /** @format int32 */
  serviceProviderGroupId?: number | null;
  /** @format int32 */
  serviceProviderLocId?: number | null;
  serviceProviderLocName?: string | null;
  serviceProviderLocTelephone?: string | null;
  serviceProviderGroupName?: string | null;
  initialRequestUserName?: string | null;
  deployedUserName?: string | null;
  vehicleAxleConfigDescription?: string | null;
  vehicleReg?: string | null;
  vehicleAvailability?: string | null;
  /** @format date-time */
  eta?: string | null;
  agreedMakeName?: string | null;
  signOffUserName?: string | null;
  defectNumber?: string | null;
  customerJobNumber?: string | null;
  /** @format date-time */
  checkedForPoRequest?: string | null;
  /** @format date-time */
  customerOrderNoRequested?: string | null;
  poRequestedByUser?: string | null;
  poRequestFormat?: PoRequestFormat;
  cancelledUserName?: string | null;
  isFrozen?: boolean | null;
  agreedDeployCallout?: string | null;
  serviceRequestLines?: ServiceRequestLineViewModel[] | null;
  refusalHistory?: RefusalLogViewModel[] | null;
  serviceRequestComments?: ServiceRequestCommentViewModel[] | null;
  selfBillingQueries?: SelfBillingQueryViewModel[] | null;
  serviceProviderPolicyFileName?: string | null;
  geolocationGUID?: string | null;
  geolocation?: GeographyGeolocation;
  purchaseInvoiceReceived?: boolean;
  sumOfPaymentGross?: string | null;
  isRefitted?: boolean;
  /** @format int32 */
  destServiceRequestHeaderId?: number | null;
  contacts?: ServiceRequestContactDetailViewModel[] | null;
  jobItems?: ServiceRequestJobItem[] | null;
}

export interface ServiceRequestHeader {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format int32 */
  serviceRequestGroupId?: number | null;
  authorisationType?: string | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  customerFleetListId?: number | null;
  initialCallerName?: string | null;
  initialCallerTel?: string | null;
  initialOrderNo?: string | null;
  initialTrailerId?: string | null;
  initialVehicleLocation?: string | null;
  initialVehicleDestination?: string | null;
  initialLocationCategory?: string | null;
  initialRequestSummary?: string | null;
  /** @format int32 */
  initialVehicleAvailability?: number | null;
  initialRequestType?: string | null;
  /** @format date-time */
  initialRequestDateTime?: string | null;
  /** @format date-time */
  initialRequestDate?: string | null;
  /** @format date-time */
  initialRequestTime?: string | null;
  /** @format int32 */
  initialRequestUserId?: number | null;
  initialThirdPartyCustomerName?: string | null;
  /** @format date-time */
  initialRequestEta?: string | null;
  deployedIsDeployed?: boolean | null;
  /** @format int32 */
  deployedServiceLocId?: number | null;
  /** @format int32 */
  deployedServiceLocEta?: number | null;
  /** @format date-time */
  deployedServiceLocToa?: string | null;
  /** @format date-time */
  deployedServiceLocDoa?: string | null;
  /** @format date-time */
  deployedServiceLocToc?: string | null;
  /** @format date-time */
  deployedServiceLocDoc?: string | null;
  /** @format int32 */
  deployedAgreedMake?: number | null;
  supplierJobRef?: string | null;
  /** @format int32 */
  deployedUserId?: number | null;
  /** @format date-time */
  deployedDateTime?: string | null;
  /** @format date-time */
  deployedDate?: string | null;
  /** @format date-time */
  deployedTime?: string | null;
  deployedFitterMobileNo?: string | null;
  signOffSignedOff?: boolean | null;
  /** @format int32 */
  signOffUserId?: number | null;
  /** @format date-time */
  signOffDateTime?: string | null;
  /** @format date-time */
  signOffDate?: string | null;
  /** @format date-time */
  signOffTime?: string | null;
  requestCancelled?: boolean | null;
  requestCancelledReason?: string | null;
  /** @format int32 */
  requestCancelledUserId?: number | null;
  vehicleTacho?: string | null;
  vehicleIdReallocated?: boolean | null;
  comments?: string | null;
  authorisationSuffix?: string | null;
  spAwaitingSignoff?: boolean | null;
  spSignedOff?: boolean | null;
  /** @format date-time */
  spSignOffDate?: string | null;
  /** @format date-time */
  spSignOffTime?: string | null;
  spAuthGivenToProvider?: boolean | null;
  isIdentifiedForRecharge?: boolean | null;
  isPrinted?: boolean | null;
  forArchive?: boolean | null;
  policyTyresFitted?: boolean | null;
  /** @format date-time */
  prebookedDate?: string | null;
  isLegal?: boolean | null;
  /** @format int32 */
  tyresRequested?: number | null;
  /** @format date-time */
  invoicePrintedOn?: string | null;
  tyreType?: string | null;
  /** @format date-time */
  etabefore?: string | null;
  /** @format date-time */
  updatedEta?: string | null;
  jobSheetLocation?: string | null;
  /** @format date-time */
  customerOrderNoRequested?: string | null;
  defectNumber?: string | null;
  customerJobNumber?: string | null;
  /** @format date-time */
  checkedForPoRequest?: string | null;
  /** @format int32 */
  poRequestedByUserId?: number | null;
  agreedDeployCallOut?: string | null;
  isFrozen?: boolean | null;
  /** @format date-time */
  created?: string | null;
  /** @format date-time */
  jobSheetFirstUploaded?: string | null;
  customerFleetlist?: CustomerFleetlist;
  agreedDeployCallOutProduct?: Product;
  customerGroup?: CustomerGroup;
  customerLocation?: CustomerLocation;
  deployedServiceLocEtum?: ServiceProviderEtum;
  deployedServiceLocation?: ServiceProviderLocation;
  serviceProviderPartworn?: ServiceProviderPartworn;
  serviceRequestLines?: ServiceRequestLine[] | null;
  accountsSalesLedger?: AccountsSalesLedger;
  accountsPurchaseLedger?: AccountsPurchaseLedger;
  accountsSalesLedgerPayment?: AccountsSalesLedgerPayment;
  vehicleAvailability?: VehicleAvailability;
  heldDeployments?: HeldDeployment[] | null;
  deployedUser?: UserInformation;
  initialRequestUser?: UserInformation;
  signOffUser?: UserInformation;
  poRequestedByUser?: UserInformation;
  cancelledUser?: UserInformation;
  agreedMake?: ProductMake;
  serviceRequestComments?: ServiceRequestComment[] | null;
  serviceProviderQueryComments?: ServiceProviderQueryComment[] | null;
  geolocationGUID?: string | null;
  geolocation?: GeographyGeolocation;
  locationCategory?: InitialLocationCategory;
  contacts?: ServiceRequestContact[] | null;
  jobItems?: ServiceRequestJobItem[] | null;
  notificationsQueued?: NotificationQueue[] | null;
  notificationHistory?: NotificationHistory[] | null;
}

export interface ServiceRequestHeaderDetailViewModel {
  customerLocation?: CustomerLocationLookupViewModel;
  /** @format date-time */
  initialRequestDate?: string | null;
  /** @format date-time */
  signOffDate?: string | null;
}

export interface ServiceRequestInputModel {
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  /** @format int32 */
  customerFleetListId?: number;
  initialCallerTitle?: string | null;
  initialCallerFirstName?: string | null;
  initialCallerLastName?: string | null;
  initialCallerTel?: string | null;
  initialCallerEmail?: string | null;
  initialCallerEmailRefused?: boolean;
  initialCallerIsDriver?: boolean;
  driversTitle?: string | null;
  driversFirstName?: string | null;
  driversLastName?: string | null;
  driversEmail?: string | null;
  driversEmailRefused?: boolean;
  driversTelephone?: string | null;
  initialVehicleLocation?: string | null;
  initialVehicleDestination?: string | null;
  initialLocationCategory?: string | null;
  initialRequestSummary?: string | null;
  /** @format int32 */
  initialVehicleAvailability?: number | null;
  initialRequestType?: string | null;
  initialOrderNo?: string | null;
  defectNumber?: string | null;
  customerJobNumber?: string | null;
  initialThirdPartyCustomerName?: string | null;
  vehicleTacho?: string | null;
  initialTrailerId?: string | null;
  tyreType?: string | null;
  geolocationGUID?: string | null;
  applicationType?: string | null;
  jobItems?: JobItemInputModel[] | null;
}

export interface ServiceRequestJobItem {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number;
  axlePos?: string | null;
  /** @format int32 */
  removalReasonId?: number;
  positionCode?: string | null;
  tyreSize?: string | null;
  speedRating?: string | null;
  loadRating?: string | null;
  applicationType?: string | null;
  removalReason?: ReplacementReason;
  serviceRequestHeader?: ServiceRequestHeader;
}

export interface ServiceRequestLine {
  /** @format int32 */
  serviceRequestLineId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  axlePos?: string | null;
  productRef?: string | null;
  /** @format int32 */
  pwSourceId?: number | null;
  /** @format float */
  quantity?: number | null;
  /** @format double */
  costPrice?: number | null;
  /** @format double */
  custPrice?: number | null;
  /** @format double */
  netRebate?: number | null;
  /** @format double */
  netCustRebate?: number | null;
  serialOn?: string | null;
  serialOff?: string | null;
  /** @format float */
  removalTread?: number | null;
  removalReason?: string | null;
  /** @format int32 */
  removalManufacturer?: number | null;
  removalNew?: string | null;
  /** @format int32 */
  removalDestination?: number | null;
  /** @format int32 */
  casingAdviceNoteLineId?: number | null;
  forArchive?: boolean | null;
  workDone?: string | null;
  /** @format int32 */
  casingDestination?: number | null;
  /** @format int32 */
  removalCode?: number | null;
  /** @format float */
  removalTread2?: number | null;
  /** @format float */
  removalTread3?: number | null;
  retorqueSerialNo?: string | null;
  dotcode?: string | null;
  serviceRequestHeader?: ServiceRequestHeader;
  casingAdviceNoteLine?: CasingAdviceNoteLine;
  product?: Product;
  removalMake?: ProductMake;
}

export interface ServiceRequestLineDetailViewModel {
  /** @format int32 */
  serviceRequestLineId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  removalNew?: string | null;
  /** @format float */
  removalTread?: number | null;
  serialOff?: string | null;
  removalReason?: string | null;
  serviceRequestHeader?: ServiceRequestHeaderDetailViewModel;
  product?: ProductDetailViewModel;
  removalMake?: ProductMake;
}

export interface ServiceRequestLineViewModel {
  /** @format int32 */
  serviceRequestLineId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number | null;
  axlePos?: string | null;
  /** @format float */
  quantity?: number | null;
  /** @format double */
  costPrice?: number | null;
  /** @format double */
  custPrice?: number | null;
  serialOn?: string | null;
  serialOff?: string | null;
  /** @format float */
  removalTread?: number | null;
  /** @format float */
  innerDepth?: number;
  /** @format float */
  treadDepth?: number;
  /** @format float */
  outerDepth?: number;
  removalReason?: string | null;
  retorqueSerialNo?: string | null;
  productDescription?: string | null;
  productGroupDescription?: string | null;
  productSubGroup?: string | null;
  positionCode?: string | null;
  productRef?: string | null;
  /** @format double */
  netRebate?: number | null;
  /** @format double */
  netCustRebate?: number | null;
  /** @format int32 */
  removalManufacturer?: number | null;
  removalNew?: string | null;
  /** @format int32 */
  removalDestination?: number | null;
  product?: Product;
  /** @format double */
  productCostPrice?: number | null;
  dotCode?: string | null;
  /** @format int32 */
  pwSourceId?: number | null;
  productGroupName?: string | null;
  productGroupType?: string | null;
}

export interface ServiceRequestTimingsInputModel {
  /** @format date-time */
  initialRequestTime?: string | null;
  /** @format date-time */
  deployedTime?: string | null;
  /** @format date-time */
  deployedServiceLocToa?: string | null;
  /** @format date-time */
  deployedServiceLocToc?: string | null;
  /** @format date-time */
  signOffTime?: string | null;
}

export interface ServiceWorkAuthorisationInputModel {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  /** @format int32 */
  serviceRequestGroupId?: number | null;
  authorisationType?: string | null;
  /** @format int32 */
  customerGroupId?: number | null;
  /** @format int32 */
  customerLocId?: number | null;
  /** @format int32 */
  customerFleetListId?: number;
  initialCallerName?: string | null;
  initialCallerTel?: string | null;
  initialOrderNo?: string | null;
  initialTrailerId?: string | null;
  initialVehicleLocation?: string | null;
  initialVehicleDestination?: string | null;
  initialLocationCategory?: string | null;
  initialRequestSummary?: string | null;
  /** @format int32 */
  initialVehicleAvailability?: number | null;
  initialRequestType?: string | null;
  /** @format date-time */
  initialRequestDateTime?: string | null;
  /** @format date-time */
  initialRequestDate?: string | null;
  /** @format date-time */
  initialRequestTime?: string | null;
  /** @format int32 */
  initialRequestUserId?: number | null;
  initialThirdPartyCustomerName?: string | null;
  /** @format date-time */
  initialRequestEta?: string | null;
  deployedIsDeployed?: boolean | null;
  /** @format int32 */
  deployedServiceLocId?: number | null;
  /** @format int32 */
  deployedServiceLocEta?: number | null;
  /** @format date-time */
  deployedServiceLocToa?: string | null;
  /** @format date-time */
  deployedServiceLocDoa?: string | null;
  /** @format date-time */
  deployedServiceLocToc?: string | null;
  /** @format date-time */
  deployedServiceLocDoc?: string | null;
  /** @format int32 */
  deployedAgreedMake?: number | null;
  supplierJobRef?: string | null;
  /** @format int32 */
  deployedUserId?: number | null;
  /** @format date-time */
  deployedDateTime?: string | null;
  /** @format date-time */
  deployedDate?: string | null;
  /** @format date-time */
  deployedTime?: string | null;
  deployedFitterMobileNo?: string | null;
  signOffSignedOff?: boolean | null;
  /** @format int32 */
  signOffUserId?: number | null;
  /** @format date-time */
  signOffDateTime?: string | null;
  /** @format date-time */
  signOffDate?: string | null;
  /** @format date-time */
  signOffTime?: string | null;
  requestCancelled?: boolean | null;
  requestCancelledReason?: string | null;
  /** @format int32 */
  requestCancelledUserId?: number | null;
  vehicleTacho?: string | null;
  vehicleIdReallocated?: boolean | null;
  comments?: string | null;
  authorisationSuffix?: string | null;
  spAwaitingSignoff?: boolean | null;
  spSignedOff?: boolean | null;
  /** @format date-time */
  spSignOffDate?: string | null;
  /** @format date-time */
  spSignOffTime?: string | null;
  spAuthGivenToProvider?: boolean | null;
  isIdentifiedForRecharge?: boolean | null;
  isPrinted?: boolean | null;
  forArchive?: boolean | null;
  policyTyresFitted?: boolean | null;
  /** @format date-time */
  prebookedDate?: string | null;
  isLegal?: boolean | null;
  /** @format int32 */
  tyresRequested?: number | null;
  /** @format date-time */
  invoicePrintedOn?: string | null;
  tyreType?: string | null;
  /** @format date-time */
  etabefore?: string | null;
  /** @format date-time */
  updatedEta?: string | null;
  jobSheetLocation?: string | null;
  /** @format date-time */
  customerOrderNoRequested?: string | null;
  defectNumber?: string | null;
  customerJobNumber?: string | null;
  /** @format date-time */
  checkedForPoRequest?: string | null;
  /** @format int32 */
  poRequestedByUserId?: number | null;
  agreedDeployCallOut?: string | null;
  isFrozen?: boolean | null;
}

export interface SignOffInputModel {
  supplierJobNumber?: string | null;
  customerOrderNumber?: string | null;
  vehicleTacho?: string | null;
  vehicleLocked?: boolean;
  /** @format date-time */
  dtDOA?: string | null;
  dtTOA?: string | null;
  /** @format date-time */
  dtDOC?: string | null;
  dtTOC?: string | null;
  policyTyresFitted?: boolean;
}

export interface SpcostPrice {
  /** @format int32 */
  spGroupId?: number | null;
  caiNumber?: string | null;
  /** @format double */
  costPrice?: number | null;
  /** @format int32 */
  pkId?: number;
  /** @format int32 */
  spLocID?: number;
  serviceProvider?: ServiceProviderGroup;
}

export interface StapleJobInputModel {
  requests?: ServiceRequestInputModel[] | null;
  groupingReason?: string | null;
  existingLinks?: boolean;
  /** @format int32 */
  serviceRequestGroupId?: number;
}

export interface StringIdentityUserRole {
  userId?: string | null;
  roleId?: string | null;
}

export interface StringInputModel {
  /** @format int32 */
  id?: number;
  text?: string | null;
}

export interface StringStringKeyValuePair {
  key?: string | null;
  value?: string | null;
}

export interface TimeSpan {
  /** @format int64 */
  ticks?: number;
  /** @format int32 */
  days?: number;
  /** @format int32 */
  hours?: number;
  /** @format int32 */
  milliseconds?: number;
  /** @format int32 */
  microseconds?: number;
  /** @format int32 */
  nanoseconds?: number;
  /** @format int32 */
  minutes?: number;
  /** @format int32 */
  seconds?: number;
  /** @format double */
  totalDays?: number;
  /** @format double */
  totalHours?: number;
  /** @format double */
  totalMilliseconds?: number;
  /** @format double */
  totalMicroseconds?: number;
  /** @format double */
  totalNanoseconds?: number;
  /** @format double */
  totalMinutes?: number;
  /** @format double */
  totalSeconds?: number;
}

export interface TokenModel {
  accessToken?: string | null;
  refreshToken?: string | null;
}

export interface UserAccessPrivilege {
  /** @format int32 */
  uniqueId?: number;
  serviceAuthorisationTakeCallAndDeploy?: boolean | null;
  serviceAuthorisationSignOff?: boolean | null;
  serviceAuthorisationAddServiceWork?: boolean | null;
  serviceAuthorisationAddOrEditComments?: boolean | null;
  accountsPurchaseLedger?: boolean | null;
  accountsSalesLedger?: boolean | null;
  accountsSalesLedgerRaiseCredits?: boolean | null;
  accountsReportsGeneral?: boolean | null;
  accountsReportsConfidential?: boolean | null;
  accountsTools?: boolean | null;
  serviceProviderAccountSetup?: boolean | null;
  serviceAuthorisationPostAuthorisationProcessing?: boolean | null;
  serviceProviderInsurancesManagement?: boolean | null;
  serviceProviderWebLoginManagement?: boolean | null;
  partwornStockManagement?: boolean | null;
  customerAccountSetup?: boolean | null;
  customerFleetlistManagement?: boolean | null;
  customerPricing?: boolean | null;
  customerWebLoginAndReportPrivilegeManagement?: boolean | null;
  productDatabaseControl?: boolean | null;
  internalReportsAndStatistics?: boolean | null;
  fleetInspectionEntry?: boolean | null;
  productivityReporting?: boolean | null;
  systemAdministration?: boolean | null;
  systemManagementConsole?: boolean | null;
  userAndPasswordManagement?: boolean | null;
  gplPricing?: boolean | null;
  pricingReports?: boolean | null;
  casingManagementWebLoginManagement?: boolean | null;
  /** @format int32 */
  lastAmmenedBy?: number | null;
  editFixedFleetCustomers?: boolean | null;
  userInformation?: UserInformation;
}

export interface UserAccessPrivilegeInputModel {
  /** @format int32 */
  uniqueId?: number;
  serviceAuthorisationTakeCallAndDeploy?: boolean | null;
  serviceAuthorisationSignOff?: boolean | null;
  serviceAuthorisationAddServiceWork?: boolean | null;
  serviceAuthorisationAddOrEditComments?: boolean | null;
  serviceAuthorisationPostAuthorisationProcessing?: boolean | null;
  accountsPurchaseLedger?: boolean | null;
  accountsSalesLedger?: boolean | null;
  accountsSalesLedgerRaiseCredits?: boolean | null;
  accountsReportsGeneral?: boolean | null;
  accountsReportsConfidential?: boolean | null;
  accountsTools?: boolean | null;
  serviceProviderAccountSetup?: boolean | null;
  serviceProviderInsurancesManagement?: boolean | null;
  serviceProviderWebLoginManagement?: boolean | null;
  partwornStockManagement?: boolean | null;
  customerAccountSetup?: boolean | null;
  customerFleetlistManagement?: boolean | null;
  customerPricing?: boolean | null;
  customerWebLoginAndReportPrivilegeManagement?: boolean | null;
  productDatabaseControl?: boolean | null;
  internalReportsAndStatistics?: boolean | null;
  fleetInspectionEntry?: boolean | null;
  productivityReporting?: boolean | null;
  systemAdministration?: boolean | null;
  systemManagementConsole?: boolean | null;
  userAndPasswordManagement?: boolean | null;
  gplPricing?: boolean | null;
  pricingReports?: boolean | null;
  casingManagementWebLoginManagement?: boolean | null;
  /** @format int32 */
  lastAmmenedBy?: number | null;
  editFixedFleetCustomers?: boolean | null;
  allowWANAccess?: boolean;
}

export interface UserInformation {
  /** @format int32 */
  uniqueId?: number;
  active?: boolean | null;
  allowWanAccess?: boolean | null;
  userId?: string | null;
  password?: string | null;
  emailAddress?: string | null;
  /** @format int32 */
  accountType?: number | null;
  /** @format date-time */
  lastLoginDate?: string | null;
  /** @format date-time */
  lastLoginTime?: string | null;
  /** @format int32 */
  loginAttempts?: number | null;
  /** @format int32 */
  loginCount?: number | null;
  lastLoginIp?: string | null;
  termsAgreement?: boolean | null;
  /** @format date-time */
  termsAgreementDate?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  requestPasswordChange?: boolean | null;
  /** @format date-time */
  passwordLastChanged?: string | null;
  /** @format int32 */
  userLoginCreatedBy?: number | null;
  newTamsPassword?: boolean | null;
  userGuid?: string | null;
  /** @format date-time */
  lastAccess?: string | null;
  serviceWorkOnly?: boolean | null;
  /** @format int32 */
  jobRoleId?: number | null;
  dialAgentId?: string | null;
  dialNumber?: string | null;
  userAccessPrivilege?: UserAccessPrivilege;
  securityJobRole?: SecurityJobRole;
}

export interface UserInputModel {
  /** @format int32 */
  uniqueId?: number;
  active?: boolean | null;
  /** @format int32 */
  allowWanAccess?: number | null;
  userId?: string | null;
  password?: string | null;
  emailAddress?: string | null;
  /** @format int32 */
  accountType?: number | null;
  /** @format date-time */
  lastLoginDate?: string | null;
  /** @format date-time */
  lastLoginTime?: string | null;
  /** @format int32 */
  loginAttempts?: number | null;
  /** @format int32 */
  loginCount?: number | null;
  lastLoginIp?: string | null;
  /** @format int32 */
  termsAgreement?: number | null;
  /** @format date-time */
  termsAgreementDate?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  requestPasswordChange?: boolean | null;
  /** @format date-time */
  passwordLastChanged?: string | null;
  /** @format int32 */
  userLoginCreatedBy?: number | null;
  newTamsPassword?: boolean | null;
  userGuid?: string | null;
  /** @format date-time */
  lastAccess?: string | null;
  serviceWorkOnly?: boolean | null;
  /** @format int32 */
  jobRoleId?: number | null;
  dialAgentId?: string | null;
  dialNumber?: string | null;
  userAccessPrivilege?: UserAccessPrivilege;
  securityJobRole?: SecurityJobRole;
}

export interface VehicleAvailability {
  /** @format int32 */
  availabilityId?: number;
  availabilityDescription?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
  /** @format int32 */
  availabilityMinutes?: number | null;
  availabilityMaxTime?: TimeSpan;
}

export interface VehicleAxleType {
  vehicleAxleTypeShort?: string | null;
  vehicleAxleDescription?: string | null;
  customerSLAPolicyFitments?: CustomerSLAPolicyFitment[] | null;
}

export interface VehicleInputModel {
  /** @format int32 */
  customerFleetListId?: number | null;
  /** @format int32 */
  customerGroupId?: number;
  /** @format int32 */
  customerLocId?: number;
  customerFleetlistVehicleReg?: string | null;
  customerCostCentre?: string | null;
  /** @format date-time */
  customerFleetlistDefleetDate?: string | null;
  isContractVehicle?: boolean | null;
  /** @format double */
  vehicleMonthlyRevenue?: number | null;
  vehicleNotes?: string | null;
  vehicleAxleConfigShort?: string | null;
  /** @format int32 */
  vehicleOperationTypeId?: number | null;
}

export interface VehicleLayout {
  vehicleAxleConfigShort?: string | null;
  vehicleGroupShort?: string | null;
  vehicleAxleConfigDescription?: string | null;
  vehicleClassification?: string | null;
  /** @format int32 */
  vehicleAxleCount?: number | null;
  /** @format int32 */
  vehicleWheelCount?: number | null;
  vehicleAxleAAxleType?: string | null;
  vehicleAxleBAxleType?: string | null;
  vehicleAxleCAxleType?: string | null;
  vehicleAxleDAxleType?: string | null;
  vehicleAxleEAxleType?: string | null;
  vehiclePosA1Code?: string | null;
  vehiclePosA2Code?: string | null;
  vehiclePosA3Code?: string | null;
  vehiclePosA4Code?: string | null;
  vehiclePosB1Code?: string | null;
  vehiclePosB2Code?: string | null;
  vehiclePosB3Code?: string | null;
  vehiclePosB4Code?: string | null;
  vehiclePosC1Code?: string | null;
  vehiclePosC2Code?: string | null;
  vehiclePosC3Code?: string | null;
  vehiclePosC4Code?: string | null;
  vehiclePosD1Code?: string | null;
  vehiclePosD2Code?: string | null;
  vehiclePosD3Code?: string | null;
  vehiclePosD4Code?: string | null;
  vehiclePosE1Code?: string | null;
  vehiclePosE2Code?: string | null;
  vehiclePosE3Code?: string | null;
  vehiclePosE4Code?: string | null;
  vehicleAxleAAxle?: VehicleAxleType;
  vehicleAxleBAxle?: VehicleAxleType;
  vehicleAxleCAxle?: VehicleAxleType;
  vehicleAxleDAxle?: VehicleAxleType;
  vehicleAxleEAxle?: VehicleAxleType;
  vehiclePosA1?: VehiclePositionType;
  vehiclePosA2?: VehiclePositionType;
  vehiclePosA3?: VehiclePositionType;
  vehiclePosA4?: VehiclePositionType;
  vehiclePosB1?: VehiclePositionType;
  vehiclePosB2?: VehiclePositionType;
  vehiclePosB3?: VehiclePositionType;
  vehiclePosB4?: VehiclePositionType;
  vehiclePosC1?: VehiclePositionType;
  vehiclePosC2?: VehiclePositionType;
  vehiclePosC3?: VehiclePositionType;
  vehiclePosC4?: VehiclePositionType;
  vehiclePosD1?: VehiclePositionType;
  vehiclePosD2?: VehiclePositionType;
  vehiclePosD3?: VehiclePositionType;
  vehiclePosD4?: VehiclePositionType;
  vehiclePosE1?: VehiclePositionType;
  vehiclePosE2?: VehiclePositionType;
  vehiclePosE3?: VehiclePositionType;
  vehiclePosE4?: VehiclePositionType;
  customerSLAPolicyFitments?: CustomerSLAPolicyFitment[] | null;
}

export interface VehicleLayoutViewModel {
  vehicleAxleConfigShort?: string | null;
  vehicleGroupShort?: string | null;
  vehicleAxleConfigDescription?: string | null;
  vehicleClassification?: string | null;
  /** @format int32 */
  vehicleAxleCount?: number | null;
  /** @format int32 */
  vehicleWheelCount?: number | null;
  vehicleAxleAAxle?: string | null;
  vehicleAxleBAxle?: string | null;
  vehicleAxleCAxle?: string | null;
  vehicleAxleDAxle?: string | null;
  vehicleAxleEAxle?: string | null;
  vehiclePosA1?: string | null;
  vehiclePosA2?: string | null;
  vehiclePosA3?: string | null;
  vehiclePosA4?: string | null;
  vehiclePosB1?: string | null;
  vehiclePosB2?: string | null;
  vehiclePosB3?: string | null;
  vehiclePosB4?: string | null;
  vehiclePosC1?: string | null;
  vehiclePosC2?: string | null;
  vehiclePosC3?: string | null;
  vehiclePosC4?: string | null;
  vehiclePosD1?: string | null;
  vehiclePosD2?: string | null;
  vehiclePosD3?: string | null;
  vehiclePosD4?: string | null;
  vehiclePosE1?: string | null;
  vehiclePosE2?: string | null;
  vehiclePosE3?: string | null;
  vehiclePosE4?: string | null;
}

export interface VehicleListViewModel {
  /** @format int32 */
  customerFleetListId?: number;
  /** @format int32 */
  customerGroupId?: number | null;
  customerGroupName?: string | null;
  customerLocationName?: string | null;
  /** @format int32 */
  customerLocId?: number | null;
  customerFleetlistVehicleReg?: string | null;
  customerFleetlistActive?: boolean | null;
  /** @format date-time */
  customerFleetlistDefleetDate?: string | null;
  /** @format int32 */
  vehicleManufacturerId?: number | null;
  vehicleGroupShort?: string | null;
  vehicleAxleConfigDescription?: string | null;
  vehicleClassification?: string | null;
  /** @format int32 */
  vehicleModelId?: number | null;
  vehicleAxleConfigShort?: string | null;
  /** @format int32 */
  vehicleOperationTypeId?: number | null;
  isContractVehicle?: boolean | null;
  vehicleNotes?: string | null;
  /** @format double */
  vehicleMonthlyRevenue?: number | null;
  /** @format date-time */
  dateAddedToFleetList?: string | null;
  forArchive?: boolean | null;
  operationType?: string | null;
  customerCostCentre?: string | null;
}

export interface VehicleListViewModelPagedResultViewModel {
  items?: VehicleListViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface VehicleManufacturer {
  /** @format int32 */
  vehicleManufacturerId?: number;
  vehicleManufacturerName?: string | null;
}

export interface VehicleModels {
  /** @format int32 */
  vehicleManufacturerId?: number | null;
  /** @format int32 */
  vehicleModelId?: number;
  /**
   * @minLength 0
   * @maxLength 5
   */
  vehicleGroupShort?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  vehicleModelName?: string | null;
}

export interface VehicleOperationType {
  /** @format int32 */
  vehicleOperationTypeId?: number;
  vehicleOperationDescription?: string | null;
}

export interface VehiclePositionType {
  wheelPositionCode?: string | null;
  wheelPositionDescription?: string | null;
}

export interface WheelDataInputModel {
  size?: string | null;
  manufacturer?: ManufacturerInputModel;
  regrooved?: string | null;
  /** @format int32 */
  treadDepth?: number | null;
  serialOn?: string | null;
  axlePosNo?: string | null;
  positionCode?: string | null;
  construction?: string | null;
  /** @format date-time */
  inspectionDate?: string | null;
}

export type CountiesListData = any;

export type CountriesListData = any;

export type AuthenticateLoginCreateData = any;

export type AuthenticatePasswordresetCreatePayload = string;

export type AuthenticatePasswordresetCreateData = any;

export type AuthenticateRefreshtokenCreateData = any;

export type AuthenticateRequestresetpasswordCreateData = any;

export type AuthenticateRevokeAllCreateData = any;

export type AuthenticateRevokeCreateData = any;

export type AuthenticateLoginCreateResult = any;

export type AuthenticateRefreshtokenCreateResult = any;

export type AuthenticateRequestresetpasswordCreateResult = any;

export type AuthenticateRevokeAllCreateResult = any;

export type AuthenticateRevokeCreateResult = any;

export type AuthenticateLoginCreateOutput = any;

export type AuthenticatePasswordresetCreateBody = string;

export type AuthenticatePasswordresetCreateResult = any;

export type AuthenticateRefreshtokenCreateOutput = any;

export type AuthenticateRequestresetpasswordCreateOutput = any;

export type AuthenticateRevokeAllCreateOutput = any;

export type AuthenticateRevokeCreateOutput = any;

export type DelphiCreateData = any;

export type SecurityrolesListData = any;

export type SecurityrolesUpdateData = any;

export type SecurityrolesDeleteData = any;

export type SecurityrolesListListData = any;

export type TimeListData = string;

export interface BreakdownListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "CustomerFleetListId" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type BreakdownListData = BreakdownListViewModelPagedResultViewModel;

export type ClickToDial8X8CreateData = any;

export interface CashBookListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type CashBookListData = CashBookListViewModelPagedResultViewModel;

export type CashBookDetailData = CashBookViewModel;

export interface SummaryListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type SummaryListData = CashBookListViewModelPagedResultViewModel;

export type CasingListData = any;

export interface CasingAdviceNoteListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "casingAdviceNoteHeaderId" */
  sort?: string;
  /** @default "desc" */
  direction?: string;
}

export type CasingAdviceNoteListData = CasingAdviceNoteListViewModelPagedResultViewModel;

export type CasingAdviceNoteDetailData = CasingAdviceNoteDetailViewModel;

export type AwaitingCollectionDetailData = CasingsAwaitingCollectionListViewModelPagedResultViewModel;

export type CasingAdviceNoteCreateData = any;

export type CollectionAgencyListData = CasingCollectionAgencyListViewModelPagedResultViewModel;

export type FindByCasingRefDetailData = CasingAdviceNoteDetailViewModel;

export type ManufacturersListData = CasingCollectionAgencyListViewModelPagedResultViewModel;

export type PortalUserCreateData = PortalUserModel;

export type PortalUserUpdateData = any;

export interface PortalUsersListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "email" */
  sortBy?: string;
  /** @default "asc" */
  sortDirection?: string;
  /** @default false */
  searchAllPortalUsers?: boolean;
}

export type PortalUsersListData = PortalUserViewModelPagedResultViewModel;

export interface CasingAdviceNoteListParams2 {
  viewType?: string;
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "" */
  currentFilter?: string;
  /** @default "CasingAdviceNoteHeaderId" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type CasingAdviceNoteListResult = SPPCasingAdviceNoteHeaderListViewModelPagedResultViewModel;

export type CasingAdviceNoteDetailResult = CCPCasingAdviceNoteHeaderDetailViewModel;

export type CasingAdviceNoteCollectedCreateData = any;

/** @format int32 */
export type CasingAdviceNoteFindByCasingRefDetailData = number;

export type CasingAuditOptionsListData = CCPCasingReviewResultDetailViewModel[];

export type CasingAuditResultsCreatePayload = CCPCasingAuditResultInputModel[];

export type CasingAuditResultsCreateData = any;

export interface CasingCollectionRequestListParams {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  itemsPerPage?: number;
  /** @format date-time */
  fromDate?: string;
  /** @format date-time */
  toDate?: string;
}

export type CasingCollectionRequestListData = CCPCasingCollectionRequestDetailViewModelPagedResultViewModel;

export interface CasingsAwaitingCollectionListParams {
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 50
   */
  itemsPerPage?: number;
  /** @default false */
  hasBeenCollectedByAgency?: boolean;
  /** @default false */
  hasBeenAudited?: boolean;
}

export type CasingsAwaitingCollectionListData = CCPCasingsListViewModelPagedResultViewModel;

export type DashboardCountsListData = CCPDashboardCountViewModel;

export type DialCreateData = any;

export type GetAgentListData = any;

export interface GetAgentsListParams {
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
  filters?: string[];
}

export type GetAgentsListData = any;

export type SetAgentUpdateData = any;

export interface CommentsListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type CommentsListData = CommentsViewModelPagedResultViewModel;

export type CommentsCreateData = any;

export type CommentsUpdateData = any;

export type CommentsDetailData = Comments;

export type AllCommentTypesListData = CommentTypesIEnumerablePagedResultViewModel;

/** @format int32 */
export type CommenttypeDetailData = number;

export interface ContactListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "FirstName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type ContactListData = any;

export type ContactCreateData = any;

export type ContactUpdateData = any;

export type ContactDetailData = any;

export type ContactDeleteData = any;

export interface AvailablelocationsDetailParams {
  filters?: string[];
  /** @format int32 */
  page?: number;
  /** @format int32 */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
  /** @format int32 */
  id: number;
}

export type AvailablelocationsDetailData = any;

export type LocationCreateData = any;

export type LocationDeleteData = any;

export interface LocationsDetailParams {
  filters?: string[];
  /** @format int32 */
  page?: number;
  /** @format int32 */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
  /** @format int32 */
  id: number;
}

export type LocationsDetailData = any;

export type ContactLookupListData = any;

export type GetContactsByServiceProviderIdDetailData = any;

export interface GroupLocationDetailParams {
  filters?: string[];
  /** @format int32 */
  page?: number;
  /** @format int32 */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
  /** @format int32 */
  groupId: number;
  /** @format int32 */
  locationId: number;
}

export type GroupLocationDetailData = any;

export interface GroupcontactsLocationDetailParams {
  filters?: string[];
  /** @format int32 */
  page?: number;
  /** @format int32 */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
  /** @format int32 */
  locationId: number;
  /** @format int32 */
  groupId: number;
}

export type GroupcontactsLocationDetailData = any;

export interface CustomerGroupListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "CustomerGroupName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type CustomerGroupListData = CustomerGroupListViewModelPagedResultViewModel;

export type CustomerGroupCreateData = any;

export type CustomerGroupUpdateData = any;

export type CustomerGroupDetailData = CustomerGroup;

export type AllCustomerGroupsListData = CustomerGroupLookupViewModelIEnumerablePagedResultViewModel;

export interface CustomerLocationsListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "CustomerLocName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type CustomerLocationsListData = CustomerLocationLookupViewModelPagedResultViewModel;

export type EditDetailData = any;

export type FleetlistDetailData = any;

export interface LocationListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "CustomerGroupName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type LocationListData = CustomerGroupListViewModelPagedResultViewModel;

export type LocationCreateResult = any;

export type LocationUpdateData = any;

export type LocationDetailData = any;

export type LocationsByGroupIdDetailData = CustomerLocationLookupViewModelIEnumerablePagedResultViewModel;

export type LookupListListData = CustomerGroupLookupViewModelPagedResultViewModel;

export type PortalUserCreateResult = PortalUserModel;

export type PortalUserUpdateResult = any;

export interface PortalUsersListParams2 {
  /**
   * @format int32
   * @default 1
   */
  pageIndex?: number;
  /**
   * @format int32
   * @default 10
   */
  pageSize?: number;
  email?: string;
  isAdmin?: boolean;
  isActive?: boolean;
  /** @default "firstName" */
  sortBy?: string;
  /** @default "asc" */
  sortDirection?: string;
}

export type PortalUsersListResult = PortalUserListViewModel;

export type ProductsCreateData = any;

export type ProductsUpdateData = any;

export interface ProductsDeleteParams {
  productRef?: string;
  /** @format int32 */
  customerId: number;
}

export type ProductsDeleteData = any;

export interface ProductsDetailParams {
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
  filters?: string[];
  /** @format int32 */
  id: number;
}

export type ProductsDetailData = any;

export type ToggleStopStatusUpdateData = any;

export type CustomerGroupLocationsListData = any;

export type DefectreasonsListData = any;

export interface FleetListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "" */
  currentFilter?: string;
  /** @default "CustomerGroupName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type FleetListData = any;

export type JobAddCreateData = any;

export type JobSignoffDetailData = CpServiceRequestLineViewModel[];

export interface JobsListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "" */
  currentFilter?: string;
  /** @default "CustomerGroupName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type JobsListData = CPJobsListViewModelPagedResultViewModel;

export type JobsDetailData = CPServiceRequestViewModel;

export type LocationResolveAddressDetailData = ResolvedIdealAddress;

export interface LocationSearchAddressListParams {
  addressString?: string;
}

export type LocationSearchAddressListData = any;

export type TyreSizesDetailData = any;

export interface UsersListParams {
  /**
   * @format int32
   * @default 1
   */
  pageIndex?: number;
  /**
   * @format int32
   * @default 10
   */
  pageSize?: number;
  fullName?: string;
  isAdmin?: boolean;
  isActive?: boolean;
  /** @default "firstName" */
  sortBy?: string;
  /** @default "asc" */
  sortDirection?: string;
  /** @format int32 */
  customerLocationIdFilter?: number;
}

export type UsersListData = any;

export type VehicleDetailData = CpVehicleViewModel;

export type VehiclesDetailData = any;

export interface CustomerReportingUsersListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 20
   */
  itemsPerPage?: number;
  /** @default "CustomerFirst" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type CustomerReportingUsersListData = any;

export type CustomerReportingUsersCreateData = any;

export type CustomerReportingUsersUpdateData = any;

export type CustomerReportingUsersDetailData = any;

export type CustomerReportingUsersUpdate2Data = any;

export type PrivilegesDetailData = any;

export type UsernameDetailData = any;

export type AxleTypesListData = CustomerSLAVehicleAxleTypeViewModel[];

export interface ClosestProvidersDetailParams {
  /** @format int32 */
  top?: number;
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  customerGroupId: number;
}

export type ClosestProvidersDetailData = CustomerSLAClosestProviderViewModelPagedResultViewModel;

export interface CustomerGroupsListParams {
  /** @default false */
  includeDeleted?: boolean;
}

export type CustomerGroupsListData = CustomerGroupLookupViewModel[];

export interface CustomerSlaListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 20
   */
  itemsPerPage?: number;
  /** @default "CustomerGroupId" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type CustomerSlaListData = CustomerSLAViewModelPagedResultViewModel;

export type CustomerSlaCreateData = CustomerSLAInputModel;

export type CustomerSlaUpdateData = CustomerSLAInputModel;

export type CustomerSlaDetailData = CustomerSLA;

export interface CustomerSlaCategoryListParams {
  /** @default false */
  includeDeleted?: boolean;
}

export type CustomerSlaCategoryListData = CustomerSLACategoryViewModel[];

export type CustomerSlaCategoryDetailData = CustomerSLACategory;

export type CustomerSlaKeyContactCreateData = CustomerSLAKeyContactInputModel;

export type CustomerSlaKeyContactUpdateData = CustomerSLAKeyContactInputModel;

export type CustomerSlaKeyContactPartialUpdateData = CustomerSLAKeyContactInputModel;

export type CustomerSlaKeyContactDetailData = CustomerSLAKeyContact;

/** @format int32 */
export type CustomerSlaKeyContactDeleteData = number;

export interface CustomerSlaKeyContactsDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  customerGroupId: number;
}

export type CustomerSlaKeyContactsDetailData = CustomerSLAKeyContactViewModel[];

export interface CustomerSlaKeyContactsDetail2Params {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  customerGroupId: number;
  /** @format int32 */
  slaId: number;
}

export type CustomerSlaKeyContactsDetail2Data = CustomerSLAKeyContactViewModel[];

export type CustomerSlaLocationCreateData = CustomerSLALocationInputModel;

export type CustomerSlaLocationUpdateData = CustomerSLALocationInputModel;

export type CustomerSlaLocationDetailData = CustomerSLALocation;

/** @format int32 */
export type CustomerSlaLocationDeleteData = number;

export interface CustomerSlaLocationsListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 20
   */
  itemsPerPage?: number;
  /** @default "CustomerGroupId" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
  /** @default false */
  includeDeleted?: boolean;
}

export type CustomerSlaLocationsListData = CustomerSLALocationViewModelPagedResultViewModel;

export interface CustomerSlaLocationsDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  customerGroupId: number;
}

export type CustomerSlaLocationsDetailData = CustomerSLALocationViewModel[];

export interface CustomerSlaLocationsDetail2Params {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  customerGroupId: number;
  /** @format int32 */
  slaId: number;
}

export type CustomerSlaLocationsDetail2Data = CustomerSLALocationViewModel[];

/** @format int32 */
export type CustomerSlaPolicyPreferenceDeleteData = number;

export type CustomerSlAsDetailData = CustomerSLAViewModel[];

export type CustomerSlaTyrePreferenceDetailData = CustomerSLATyrePreference;

/** @format int32 */
export type CustomerSlaTyrePreferenceDeleteData = number;

export type CustomerSlaTyrePreferencesUpdatePayload = CustomerSLATyrePreferenceInputModel[];

export interface CustomerSlaTyrePreferencesUpdateParams {
  /** @default false */
  refreshDatabase?: boolean;
}

export type CustomerSlaTyrePreferencesUpdateData = CustomerSLATyrePreferenceInputModel[];

export interface CustomerSlaTyrePreferencesDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  policyFitmentId: number;
}

export type CustomerSlaTyrePreferencesDetailData = CustomerSLATyrePreferenceViewModel[];

export type DtmSlaKeyContactCreateData = DTMSLAKeyContactInputModel;

export type DtmSlaKeyContactUpdateData = DTMSLAKeyContactInputModel;

export type DtmSlaKeyContactDetailData = DTMSLAKeyContact;

/** @format int32 */
export type DtmSlaKeyContactDeleteData = number;

export interface DtmSlaKeyContactsListParams {
  securityJobRolesIds?: number[];
  /** @default false */
  includeDeleted?: boolean;
}

export type DtmSlaKeyContactsListData = DTMSLAKeyContactViewModel[];

export interface DtmSlaKeyContactsDetailParams {
  securityJobRolesIds?: number[];
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  customerGroupId: number;
}

export type DtmSlaKeyContactsDetailData = DTMSLAKeyContactViewModel[];

export interface DtmSlaKeyContactsDetail2Params {
  securityJobRolesIds?: number[];
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  customerGroupId: number;
  /** @format int32 */
  slaId: number;
}

export type DtmSlaKeyContactsDetail2Data = DTMSLAKeyContactViewModel[];

export type InvoiceFrequencyDetailData = CustomerSLAInvoiceFrequencyViewModel;

export type InvoicePeriodDetailData = CustomerSLAInvoicePeriodViewModel;

export type InvoicePreferenceCreateData = CustomerSLAInvoicePreferenceInputModel;

export type InvoicePreferenceUpdateData = CustomerSLAInvoicePreferenceInputModel;

export type InvoicePreferenceDetailData = CustomerSLAInvoicePreferenceViewModel;

export interface InvoicePreferencesDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  slaId: number;
}

export type InvoicePreferencesDetailData = CustomerSLAInvoicePreferenceLookupViewModel[];

export interface LocationInwardDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  inwardCode: string;
}

export type LocationInwardDetailData = ServiceProviderLocationListViewModel[];

export interface LocationOutwardDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  outwardCode: string;
}

export type LocationOutwardDetailData = ServiceProviderLocationListViewModel[];

export type LocationServiceProviderCreateData = LocationNewServiceProviderInputModel;

export interface ManufacturersListParams1 {
  /** @default false */
  includeDeleted?: boolean;
}

export type ManufacturersListResult = CustomerSLAProductMakeViewModel[];

export interface PoliciesDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  slaId: number;
}

export type PoliciesDetailData = CustomerSLAPolicyTypeLookupViewModel[];

export type PolicyFitmentDetailData = CustomerSLAPolicyFitment;

/** @format int32 */
export type PolicyFitmentDeleteData = number;

export type PolicyFitmentsCreatePayload = CustomerSLAPolicyFitmentInputModel[];

export interface PolicyFitmentsCreateParams {
  /** @default false */
  refreshDatabase?: boolean;
}

export type PolicyFitmentsCreateData = CustomerSLAPolicyFitmentInputModel[];

export type PolicyFitmentsUpdatePayload = CustomerSLAPolicyFitmentInputModel[];

export interface PolicyFitmentsUpdateParams {
  /** @default false */
  refreshDatabase?: boolean;
}

export type PolicyFitmentsUpdateData = CustomerSLAPolicyFitmentInputModel[];

export interface PolicyFitmentsDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  slaId: number;
}

export type PolicyFitmentsDetailData = CustomerSLAPolicyFitmentViewModel[];

export type PolicyPreferenceCreateData = CustomerSLAPolicyPreferenceInputModel;

export type PolicyPreferenceUpdateData = CustomerSLAPolicyPreferenceInputModel;

export type PolicyPreferenceDetailData = CustomerSLAPolicyPreferenceViewModel;

export interface PolicyPreferencesDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  slaId: number;
}

export type PolicyPreferencesDetailData = CustomerSLAPolicyPreferenceViewModel[];

export interface PolicyTypesListParams {
  /** @default false */
  includeDeleted?: boolean;
}

export type PolicyTypesListData = CustomerSLAPolicyTypeViewModel[];

export type ProductSeasonsListData = CustomerSLAProductSeasonViewModel[];

export type SecurityJobRolesListData = CustomerSLASecurityJobRolesViewModel[];

export type ServiceOperatingCentresListData = ServiceOperatingCentres[];

export type ServiceOperatingCentresDetailData = ServiceOperatingCentres[];

export interface StandardPoliciesListParams {
  /** @default false */
  includeDeleted?: boolean;
}

export type StandardPoliciesListData = CustomerSLAStandardPolicyLookupViewModel[];

export interface StandardPoliciesDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  slaId: number;
}

export type StandardPoliciesDetailData = CustomerSLAStandardPolicyViewModel[];

export interface TreadPatternsDetailParams {
  /** @default false */
  includeDeleted?: boolean;
  /** @format int32 */
  productMakeId: number;
}

export type TreadPatternsDetailData = CustomerSLATreadPatternViewModel;

export interface TyreTypesListParams {
  /** @default false */
  includeDeleted?: boolean;
}

export type TyreTypesListData = CustomerSLATyreTypeViewModel[];

export type VehicleTypesListData = CustomerSLAVehicleClassificationViewModel;

export type VehicleTypesDetailData = CustomerSLAVehicleLayoutLookupModel[];

export type EmailCreateData = any;

export interface EmailListParams {
  filters?: string[];
  /** @format int32 */
  page?: number;
  /** @format int32 */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
}

export type EmailListData = any;

export type EmailUpdateData = any;

export type ResendCreateData = any;

export type DirectoryCreateData = any;

export type DirectoryDelphiCgCreateData = any;

export type DirectoryDelphiNmCreateData = any;

export type DirectoryDelphiSpCreateData = any;

export type ExistsCreateData = any;

export interface ExternalCreatePayload {
  files?: File[];
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  supplierId?: number;
  /** @format int32 */
  supplierLocationId?: number;
  /** @format int32 */
  jobId?: number;
}

export type ExternalCreateData = any;

export interface ImportCreatePayload {
  files?: File[];
  uploadType?: string;
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  jobId?: number;
}

export type ImportCreateData = any;

export type PathCreateData = any;

export type PostFileData = any;

export type GetClosestGeolocationFromPostCodeDetailData = any;

export interface GetVehicleLocationAddressListParams {
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
}

export type GetVehicleLocationAddressListData = any;

export type ReceiveLocationCreateData = any;

export type ResolveAddressDetailData = any;

export type RetrieveGeolocationDetailData = any;

export interface SearchAddressListParams {
  addressString?: string;
}

export type SearchAddressListData = any;

export type SendGeolocationTextCreateData = any;

export interface ManualServiceRequestListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "ManualICCustomer" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type ManualServiceRequestListData = any;

export interface NetworkManagerUsersListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 20
   */
  itemsPerPage?: number;
  /** @default "NetworkManagerLast" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type NetworkManagerUsersListData = any;

export type NetworkManagerUsersCreateData = any;

export type NetworkManagerUsersUpdateData = any;

export type NetworkManagerUsersUpdate2Data = any;

export type NetworkManagerUsersDetailData = any;

export type GetAllNetworkManagerUsersListData = any;

export interface NominalLedgerListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type NominalLedgerListData = NominalLedgerListViewModelPagedResultViewModel;

export interface ExportListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type ExportListData = any;

export type GetByPlDetailData = NominalLedgerListViewModelPagedResultViewModel;

export type GetBySlDetailData = NominalLedgerListViewModelPagedResultViewModel;

export interface PartWornListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "ServiceProviderGroupName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type PartWornListData = PartWornListViewModelPagedResultViewModel;

export type PartWornCreateData = any;

export type PartWornDetailData = any;

export type PartWornPartialUpdateData = any;

export interface CustomerGroupAtLocationListParams {
  /** @format int32 */
  customerGroupId?: number;
  /** @format int32 */
  serviceProviderLocId?: number;
}

export type CustomerGroupAtLocationListData = any;

export type ReallocateStockUpdateData = any;

export type ProductCreateData = any;

export type ProductUpdateData = any;

export type ProductDetailData = ProductMake;

export type CalloutsListData = any;

export interface CustomerPricesDetailParams {
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
  filters?: string[];
  id: string;
}

export type CustomerPricesDetailData = PagedResult;

export type DefectReasonsListData = any;

export interface ExportListParams2 {
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 0
   */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
  filters?: string[];
  opType?: string;
}

export type ExportListResult = any;

export interface GetProductParams {
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
  filters?: string[];
}

export type GetProductData = any;

export type GetDisposalOptionsDetailData = any;

export type GetSizesForVehicleDetailData = any;

export interface ImportCustomerPricesCreatePayload {
  files?: File[];
}

export type ImportCustomerPricesCreateData = any;

export interface ImportPricesGplCreatePayload {
  files?: File[];
}

export type ImportPricesGplCreateData = any;

export interface JobBuilderProductDetailsDetailParams {
  productRef?: string;
  editing?: boolean;
  /** @format int32 */
  serviceRequestHeaderId: number;
}

export type JobBuilderProductDetailsDetailData = any;

export type LookupsListData = any;

export type MakeCreateData = any;

export type ManufacturerpatternsDetailData = any;

export type ManufacturersListOutput = any;

export type ManufacturesLookupListData = any;

export type PriceGplUpdateData = any;

export interface ProductCostPriceDetailParams {
  /** @format int32 */
  serviceProviderGroupId?: number;
  /** @format int32 */
  serviceProviderLocId?: number;
  productRef?: string;
  /** @format int32 */
  serviceRequestHeaderId: number;
}

export type ProductCostPriceDetailData = any;

export type ProductPriceDetailData = CustomerPricesGpl;

export interface ProductSuppliersDetailParams {
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  sort?: string;
  direction?: string;
  filters?: string[];
  id: string;
}

export type ProductSuppliersDetailData = SpcostPrice;

export type RemovalReasonsListData = any;

export type SchematicProductDataDetailData = any;

export type SizeCreateData = any;

export type UpdateProductIsActiveUpdateData = any;

export interface PurchaseLedgerListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type PurchaseLedgerListData = PurchaseLedgerListViewModelPagedResultViewModel;

export type ResolveSelfBillingQueryUpdateData = any;

export type SelfBillingQueryDetailData = any;

export type AddPrepaymentCreateData = any;

export interface ExportListParams4 {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type ExportListOutput = any;

export interface GetBalanceListParams {
  filters?: string[];
  isPrepaidBalance?: boolean;
}

/** @format double */
export type GetBalanceListData = number;

export interface GetPrepaymentBalanceListParams {
  filters?: string[];
}

/** @format double */
export type GetPrepaymentBalanceListData = number;

export interface PrepaymentsGetListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type PrepaymentsGetListData = PrepaymentViewModelPagedResultViewModel;

export interface PrepaymentsGetStatusDetailParams {
  prepayid: string;
}

export type PrepaymentsGetStatusDetailData = string;

export interface PrepaymentsGetSummaryListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type PrepaymentsGetSummaryListData = PrepaymentSummaryViewModelPagedResultViewModel;

export type PrintStatementByGroupCreateData = any;

export type PurchaseLedgerHeaderDetailData = PurchaseLedgerHeaderViewModel;

export type PurchaseLedgerPaymentsDetailData = PurchaseLedgerPaymentsListViewModelPagedResultViewModel;

export type SelfBillingQueryCommentCreateData = any;

export interface TestGetListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type TestGetListData = PurchaseLedgerListViewModelPagedResultViewModel;

export type ReportListData = any;

export type ReportDetailData = any;

export type SequalizerListData = any;

export type SequalizerCreateData = any;

export type SequalizerExportCreateData = any;

export type SequalizerStoredProcedureCreateData = any;

export interface DatasetColumnsListParams {
  viewName?: string;
}

export type DatasetColumnsListData = any;

export interface DatasetDataListParams {
  DatasetName?: string;
  ColumnList?: string;
  Sort?: string;
  Direction?: string;
  Filters?: string[];
  /** @format int32 */
  Page?: number;
  /** @format int32 */
  ItemsPerPage?: number;
  GetAll?: boolean;
  EmailRecipients?: string;
}

export type DatasetDataListData = any;

export type DatasetsListData = any;

export type ExportCreateData = any;

export type ReportCreateData = any;

export type ReportUpdateData = any;

export type ReportDeleteData = any;

export interface ReportsListParams {
  reportType?: ReportType;
}

export type ReportsListData = any;

export interface SalesLedgerListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type SalesLedgerListData = SalesLedgerListViewModelPagedResultViewModel;

export type BalanceDetailData = any;

export interface ExportListParams6 {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type ExportListResult1 = any;

export type PrintInvoiceCreateData = any;

export type PrintManualInvoiceCreateData = any;

export type PrintMergedInvoicesCreateData = any;

export type PrintStatementByGroupCreateResult = any;

export type SalesLedgerHeaderDetailData = SalesLedgerHeaderViewModel;

export type SalesLedgerPaymentsDetailData = SalesLedgerPaymentsListViewModelPagedResultViewModel;

export type SearchCreateData = any;

export interface ServiceProviderListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "ServiceProviderGroupName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type ServiceProviderListData = ServiceProviderGroupListViewModelPagedResultViewModel;

export type ServiceProviderUpdateData = any;

export type ServiceProviderCreateData = any;

export type ServiceProviderDetailData = CustomerGroup;

export type AddServiceProviderLocationCreateData = any;

export type AllServiceProviderGroupsListData = CustomerGroupLookupViewModelIEnumerablePagedResultViewModel;

export type CheckGroupNameUniqueDetailData = any;

export type ContactInfoDetailData = ServiceProviderLocationListViewModel;

export type CustomerGroupLocationsDetailData = ServiceProviderLocationListViewModel[];

export type InsuranceDetailData = CustomerLocationLookupViewModelPagedResultViewModel;

export type LocationDetailResult = ServiceProviderLocationListViewModel;

export type LocationInfoDetailData = ServiceProviderLocation;

export type LocationLookupListListData = SelectListViewModel;

export interface LocationsListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "ServiceProviderLocName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
  /** @format int32 */
  customerGroupId?: number;
  /**
   * @format int32
   * @default -1
   */
  serviceRequestHeaderId?: number;
}

export type LocationsListData = ServiceProviderLocationListViewModelPagedResultViewModel;

export interface LocationsByGroupIdDetailParams1 {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "ServiceProviderLocName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
  /** @format int32 */
  groupId: number;
}

export type LocationsByGroupIdDetailResult = any;

export type LocationsByGroupIdAllDetailData = CustomerLocationLookupViewModelPagedResultViewModel;

export type LookupListListResult = CustomerGroupLookupViewModelPagedResultViewModel;

export interface NoticeBoardListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "NoticeDate" */
  sort?: string;
  /** @default "desc" */
  direction?: string;
}

export type NoticeBoardListData = ServiceProviderNoticeBoardListViewModelPagedResultViewModel;

export type OpeningTimesDetailData = CustomerLocationLookupViewModelPagedResultViewModel;

export type PortalUserCreateOutput = PortalUserModel;

export type PortalUserUpdateOutput = any;

export interface PortalUsersListParams4 {
  filters?: string[];
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "firstName" */
  sortBy?: string;
  /** @default "asc" */
  sortDirection?: string;
  /** @default false */
  searchAllPortalUsers?: boolean;
}

export type PortalUsersListOutput = PortalUserViewModelPagedResultViewModel;

export type ServiceProviderLocationByIdDetailData = any;

export type UpdateServiceProviderUpdateData = any;

export type UpdateServiceProviderLocationUpdateData = any;

export interface CasingAdviceNoteListParams4 {
  viewType?: string;
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "" */
  currentFilter?: string;
  /** @default "CasingAdviceNoteHeaderId" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type CasingAdviceNoteListOutput = SPPCasingAdviceNoteHeaderListViewModelPagedResultViewModel;

/** @format int32 */
export type CasingAdviceNoteCreateResult = number;

export type CasingAdviceNoteDetailOutput = SPPCasingAdviceNoteHeaderDetailViewModel;

export type CasingAdviceNotePrintDetailData = string;

export type CasingCollectionAgenciesListData = SPPCasingCollectionAgenciesViewModel;

export interface CasingsForNewCanNoteListParams {
  /** @format int32 */
  removalDestination?: number;
}

export type CasingsForNewCanNoteListData = SPPServiceRequestLineListViewModel[];

export type CustomerPartwornDetailData = any;

export type CustomerGroupsListResult = any;

export type DirectoryDelphiSpCreateResult = any;

export type FleetInspectionCreatePayload = SchematicData[];

export type FleetInspectionCreateData = any;

export type FleetInspectionLastfitDetailData = any;

export type FleetSearchDetailData = any;

export interface FleetinspectionProductdataListParams {
  /** @format int32 */
  fleetListId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number;
}

export type FleetinspectionProductdataListData = any;

export interface JobsListParams2 {
  viewType?: string;
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "" */
  currentFilter?: string;
  /** @default "" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type JobsListResult = SPPJobsListViewModel;

export type JobsDetailResult = SPPServiceRequestViewModel;

export type JobsCountsListData = any;

export type JobsSignoffDetailData = any;

export type NoticeCountsListData = any;

export interface NoticesListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "" */
  currentFilter?: string;
  /** @default "" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type NoticesListData = SPPNoticesListViewModel;

export type NoticesDetailData = any;

export type PartwornAddCreateData = any;

export type PartwornCustomerGroupsListData = any;

export type PartwornStockDetailData = any;

export interface ProductdetailsDetailParams {
  /** @format int32 */
  serviceRequestHeaderId?: number;
  editing?: boolean;
  productRef: string;
}

export type ProductdetailsDetailData = any;

export type ProductMakesListData = any;

export interface ProductsListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "" */
  currentFilter?: string;
  /** @default "" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type ProductsListData = SPPProductsListViewModelPagedResultViewModel;

export interface ProductsSearchListParams {
  query?: string;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  /** @default true */
  paginate?: boolean;
  /** @default false */
  withPrice?: boolean;
}

export type ProductsSearchListData = any;

export type ProductSizesListData = any;

export type SelfbillingDetailData = any;

export type SelfbillingCreateData = any;

export type SelfbillingQueryCreateData = any;

export type SelfbillingQueryClearCreateData = any;

export type SignoffCreateData = any;

export type SignoffAddJobLineCreateData = any;

export type SignoffEditJobLineCreateData = any;

export interface SignoffRemovalDestinationsDetailParams {
  replacementReason?: string;
  /** @format int32 */
  productGroup?: number;
  /** @format int32 */
  serviceRequestHeaderId: number;
}

export type SignoffRemovalDestinationsDetailData = any;

export type SignoffRemoveJobLineCreateData = any;

export type SignoffSignoffwheeldataDetailData = any;

export interface UploadJobsheetCreatePayload {
  files?: File[];
}

export type UploadJobsheetCreateData = any;

export interface VehicleSchematicListParams {
  /** @format int32 */
  fleetListId?: number;
  /** @format int32 */
  serviceRequestHeaderId?: number;
}

export type VehicleSchematicListData = any;

export interface ServiceProviderUsersListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 20
   */
  itemsPerPage?: number;
  /** @default "ServiceProviderLocName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type ServiceProviderUsersListData = any;

export type ServiceProviderUsersCreateData = any;

export type ServiceProviderUsersUpdateData = any;

export type ServiceProviderUsersUpdate2Data = any;

export type ServiceProviderUsersDetailData = any;

export type ServiceRequestCreateData = any;

export interface ServiceRequestListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "" */
  currentFilter?: string;
  /** @default "CustomerGroupName" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type ServiceRequestListData = any;

export type ServiceRequestDetailData = ServiceRequestDetailViewModel;

export type AdjustCustomerOrderNoUpdateData = any;

export type AdjustTimingsUpdateData = any;

export type CancelCreateData = any;

/** @format int32 */
export type CanceldeploymentCreatePayload = number;

export type CanceldeploymentCreateData = any;

export type CancelJobCompletelyCreateData = any;

export type CancelSignOffUpdateData = any;

export type ChangeJobSheetRefUpdatePayload = string;

export type ChangeJobSheetRefUpdateData = any;

export type CommentsCreateResult = any;

export type ConfirmedCheckedUpdateData = any;

export type DeployUpdateData = any;

export type DuplicateCheckDetailData = any;

export type PutServiceRequestData = any;

export interface GetJobSignoffDateListParams {
  authKey?: string;
  /** @format int32 */
  jobNo?: number;
}

export type GetJobSignoffDateListData = any;

export type JobRefusedCreateData = any;

export type LookupsVehicleAvailabilityListData = any;

export type PrintServiceRequestCreateData = any;

/** @format int32 */
export type ReallocateCostCentreUpdatePayload = number;

export type ReallocateCostCentreUpdateData = any;

/** @format int32 */
export type ReallocateServiceProviderUpdatePayload = number;

export type ReallocateServiceProviderUpdateData = any;

export type ReallocateVehicleUpdateData = any;

export type RefusalReasonsListData = any;

export type SendProviderEmailCreateData = any;

export type SignoffDetailData = any;

export type SignoffCreateResult = any;

export type SignoffAddJobLineCreateResult = any;

export type SignoffChangeAxlePositionCreateData = any;

export type SignoffDuplicateProductCreateData = any;

export type SignoffEditJobLineCreateResult = any;

export interface SignoffRemovalDestinationsDetailParams2 {
  replacementReason?: string;
  /** @format int32 */
  productGroup?: number;
  /** @format int32 */
  serviceRequestHeaderId: number;
}

export type SignoffRemovalDestinationsDetailResult = any;

export type SignoffRemoveJobLineCreateResult = any;

export interface SignOffWheelDataDetailParams {
  axlePosNo?: string;
  /** @format int32 */
  serviceRequestHeaderId: number;
}

export type SignOffWheelDataDetailData = any;

export type StapledjobsCreateData = any;

export type StapledjobsDetailData = any;

export type StapledjobsRemoveCreateData = any;

export type PutServiceRequest2Data = any;

export type PutServiceRequest3Data = any;

export type UncancelCreateData = any;

export type UnlockCreateData = any;

export interface UpdateJobSheetLocationsListParams {
  /** @format int32 */
  skip?: number;
  /** @format int32 */
  take?: number;
  loop?: boolean;
  nullOnly?: boolean;
}

export type UpdateJobSheetLocationsListData = any;

export type UpdatePoRefCreateData = any;

export interface UploadFilesCreatePayload {
  files?: File[];
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  supplierId?: number;
  /** @format int32 */
  supplierLocationId?: number;
  /** @format int32 */
  jobId?: number;
}

export type UploadFilesCreateData = any;

export interface UploadFilesExternalCreatePayload {
  files?: File[];
  /** @format int32 */
  customerId?: number;
  /** @format int32 */
  supplierId?: number;
  /** @format int32 */
  supplierLocationId?: number;
  /** @format int32 */
  jobId?: number;
}

export type UploadFilesExternalCreateData = any;

export type ServiceWorkAuthorisationCreateData = any;

export type DuplicateCheckDetailResult = any;

export interface GetSmsAlertListParams {
  /** @format int32 */
  alertId?: number;
  /** @format int32 */
  customerGroupId?: number;
}

export type GetSmsAlertListData = any;

export type UsersCreateData = PortalUserModel;

export type UsersUpdateData = any;

export type UsersDetailData = PortalUserModel;

export type UsersChangePasswordCreateData = any;

export type UsersCreateResult = PortalUserModel;

export type UsersUpdateResult = any;

export type UsersDetailResult = PortalUserModel;

export type UsersChangePasswordCreateResult = any;

export type UsersCreateOutput = PortalUserModel;

export type UsersUpdateOutput = any;

export type UsersDetailOutput = PortalUserModel;

export type UsersChangePasswordCreateOutput = any;

export interface UsersListParams2 {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 20
   */
  itemsPerPage?: number;
  /** @default "First_Name" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type UsersListResult = any;

export type UsersCreateResult1 = any;

export type UsersUpdateResult1 = any;

export type UsersDetailOutput1 = any;

export type PrivilegesCreateData = any;

export type PrivilegesUpdateData = any;

export type PrivilegesDetailResult = any;

export interface VehicleListParams {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type VehicleListData = VehicleListViewModelPagedResultViewModel;

export type VehicleUpdateData = any;

export type VehicleCreateData = any;

export type VehicleDetailResult = VehicleModels;

export type SchematicDetailData = CustomerFleetlistViewModel;

export interface SchematicLastfitDetailParams {
  axlePos?: string;
  /** @format int32 */
  id: number;
}

export type SchematicLastfitDetailData = any;

export type ConfigSelectListListData = StringStringKeyValuePair[];

export type DefleetUpdateData = any;

export type DefleetVehiclesAtLocationCreateData = any;

export interface ExportListParams8 {
  filters?: string[];
  /**
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * @format int32
   * @default 10
   */
  itemsPerPage?: number;
  /** @default "id" */
  sort?: string;
  /** @default "asc" */
  direction?: string;
}

export type ExportListResult2 = any;

export type FleetinspectionCreateData = any;

export type FleetlistImportCreatePayload = FleetImportViewModel[];

export type FleetlistImportCreateData = any;

export type OpertaionTypeSelectListListData = Int32StringKeyValuePair[];

export type ReallocateUpdateData = any;

export type RefleetUpdateData = any;

export type SearchCreateResult = any;

export type UpdateWheelDataCreateData = any;

export type VehiclehistoryDetailData = any;

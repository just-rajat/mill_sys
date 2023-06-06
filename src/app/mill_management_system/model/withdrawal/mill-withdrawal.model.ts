import { MillWithdrawalDetails } from "./mill-withdrawal-details.model";

export class MillWithdrawal {
    stateCode: string | undefined;
    stockType: string | undefined;
    stateAgencyCode: string | undefined;
    districtAgencyCode: string | undefined;
    centerCode: string | undefined;
    memberType: string | undefined;
    memberName: string | undefined;
    millCode: string | undefined;
    commodityCode: string | undefined;
    seasonId: string | undefined;
    financialYear: string | undefined;
    receiptNo: string | undefined;
    userId: string | undefined;
    totalQuantityWithdrew: number = 0;
    totalBagsWithdrew: number = 0;
    withdrawalDetailsList: MillWithdrawalDetails[] | undefined;
}

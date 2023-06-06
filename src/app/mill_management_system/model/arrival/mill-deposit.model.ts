import { MillDepositDetails } from "./mill-deposit-details.model";

export class MillDeposit {

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
    totalQuantityReceived: number = 0;
    totalBagsReceived: number = 0;
    depositDetailsList: MillDepositDetails[] | undefined;
}

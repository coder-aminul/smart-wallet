import React from "react";
import ContentWrapper from "../Components/ContentWrapper";
import ExportButton from "../Components/ExportButton";
import IncomeTnxTable from "../Components/IncomeTnxTable";
import PageTitle from "../Components/PageTitle";

export default function IncomeList() {
  return (
    <ContentWrapper>
      <PageTitle text="Income Transction">
        <ExportButton />
      </PageTitle>
      <IncomeTnxTable />
    </ContentWrapper>
  );
}

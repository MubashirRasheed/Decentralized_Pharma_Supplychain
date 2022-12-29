import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Toolbar,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Selection,
} from "@syncfusion/ej2-react-grids";

import { medicinesData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Medicines = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Medicines" />
      <GridComponent
        id="gridcomp"
        dataSource={medicinesData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Toolbar,
            Selection,
          ]}
        />
      </GridComponent>
    </div>
  );
};
export default Medicines;

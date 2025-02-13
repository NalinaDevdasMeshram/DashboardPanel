import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Order" />
    <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      allowExcelExport
      allowPdfExport
      contextMenuItems={contextMenuItems}
    >
      <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
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
          PdfExport,
          Edit,
        ]}
      />
    </GridComponent>
  </div>
);

export default Orders;

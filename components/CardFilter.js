import React from "react";
import Dropdown from "./Dropdown";
import Drops from "./Drops";
import SearchInput from "./SearchInput";
import Tables from "./Tables";

export default function CardFilter({
  arrKategori,
  arrOperator,
  arrStatus,
  currentTab,
  handleSearch,
  onSelectChange,
  listActiveDrop,
  arrFilter,
}) {
  return (
    <div className="bg-white flex flex-col rounded-md p-4 gap-5">
      <div className="mb-5">
        <p className="text-xl">{currentTab.label}</p>
      </div>

      <div className="flex flex-row flex-wrap items-center gap-5">
        <div className="rounded-md flex flex-row flex-wrap justify-between items-center gap-3">
          <p>Kategori</p>
          <div>
            <Drops
              items={arrKategori}
              buttonName={
                listActiveDrop && listActiveDrop.productType
                  ? listActiveDrop.productType
                  : "Semua Kategori"
              }
              onSelectChange={onSelectChange}
            />
          </div>
        </div>

        <div className="rounded-md flex flex-row flex-wrap justify-between items-center gap-3">
          <p>Operator</p>
          <div>
            <Drops
              items={arrOperator}
              buttonName={
                listActiveDrop && listActiveDrop.operator
                  ? listActiveDrop.operator
                  : "Semua Operator"
              }
              onSelectChange={onSelectChange}
            />
          </div>
        </div>

        <div className="rounded-md flex flex-row flex-wrap justify-between items-center gap-3">
          <p>Status</p>
          <div>
            <Drops
              items={arrStatus}
              buttonName={
                listActiveDrop && listActiveDrop.status
                  ? listActiveDrop.status
                  : "Tidak Aktif"
              }
              onSelectChange={onSelectChange}
            />
          </div>
        </div>
        <div className="rounded-md flex flex-row flex-wrap justify-between items-center gap-3">
          <p>Cari</p>
          <div>
            <SearchInput handleSearch={handleSearch} arrFilter={arrFilter} />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Dropdown from './Dropdown';
import Drops from './Drops';
import SearchInput from './SearchInput';
import Tables from './Tables';

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
            {/* <Drops data={arrKategori} onSelectChange={onSelectChange} /> */}

            <Dropdown
              data={arrKategori}
              onSelectChange={onSelectChange}
              buttonName={(listActiveDrop && listActiveDrop.kategori) ? listActiveDrop.kategori : 'Semua Kategori'}
              idButton="kategori"
            />
          </div>
        </div>

        <div className="rounded-md flex flex-row flex-wrap justify-between items-center gap-3">
          <p>Operator</p>
          <div>
            <Dropdown
              data={arrOperator}
              onSelectChange={onSelectChange}
              buttonName={(listActiveDrop && listActiveDrop.operator) ? listActiveDrop.operator : 'Semua Operator'}
              idButton="operator"
            />
          </div>
        </div>

        <div className="rounded-md flex flex-row flex-wrap justify-between items-center gap-3">
          <p>Status</p>
          <div>
            <Dropdown
              data={arrStatus}
              onSelectChange={onSelectChange}
              idButton="status"
              buttonName={(listActiveDrop && listActiveDrop.status) ? listActiveDrop.status : 'Tidak Aktif'}

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

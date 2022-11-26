import React from 'react';
import Dropdown from './Dropdown';
import SearchInput from './SearchInput';

export default function CardContent({ currentTab }) {
  const dataKategori = [
    { id: 1, ididKategori: 'mobile', label: 'Mobile' },
    { id: 2, ididKategori: 'bpjstk', label: 'Bpjstk' },
    { id: 3, ididKategori: 'bpjsks', label: 'Bpjsks' },
    { id: 4, ididKategori: 'ewallet', label: 'E-wallet' },
    { id: 5, ididKategori: 'telkom-postpaid', label: 'Telkom Postpaid' },
    { id: 6, ididKategori: 'zakat', label: 'Zakat' },
    { id: 7, ididKategori: 'infaq', label: 'Infaq' },
    { id: 8, ididKategori: 'wakaf', label: 'Wakaf' },
    { id: 9, ididKategori: 'qurban', label: 'Qurban' },
    { id: 10, ididKategori: 'multifinance', label: 'Multifinance' },
  ];
  const dataOperator = [
    { id: 1, idOperator: 'mandiri_utama_finance', label: 'Mandiri Utama Finance' },
    { id: 2, idOperator: 'FNFIF', label: 'FNFIF' },
  ];
  const dataStatus = [
    { id: 1, idStatus: 'tidak', label: 'Tidak Aktif' },
  ];
  return (
    <div className="bg-white flex flex-col rounded-md p-4">
      <div className="mb-5">
        <p className="text-xl">{currentTab.label}</p>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-5">
        <div className="rounded-md flex flex-row flex-wrap justify-between items-center gap-3">
          <p>Kategori</p>
          <div>
            <Dropdown data={dataKategori} buttonName="Semua Kategori" idButton="kategori" />
          </div>
        </div>

        <div className="rounded-md flex flex-row flex-wrap justify-between items-center gap-3">
          <p>Operator</p>
          <div>
            <Dropdown data={dataOperator} buttonName="Semua Operator" idButton="operator" />
          </div>
        </div>

        <div className="rounded-md flex flex-row flex-wrap justify-between items-center gap-3">
          <p>Status</p>
          <div>
            <Dropdown data={dataStatus} buttonName="Aktif" idButton="status" />
          </div>
        </div>
        <div className="rounded-md flex flex-row flex-wrap justify-between items-center gap-3">
          <p>Cari</p>
          <div>
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
}

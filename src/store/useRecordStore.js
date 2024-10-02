import { create } from "zustand";

const useRecordStore = create((set) => ({
    records: [],
    addRecord: (record) => set((state) => ({ records: [...state.records, record] })),
}))

export default useRecordStore;
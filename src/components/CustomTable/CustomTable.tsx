import { useState } from "react";
import { Pagination } from "./Pagination";
import "./styles.css";

interface Item {
  id: number;
  city: string;
  country: string;
}

interface CustomTableProps {
  items: Item[];
  options: number[];
}

export const CustomTable = ({ items, options }: CustomTableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleCurrentPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsDisplayed = items.slice(startIndex, endIndex);

  return (
    <div className="custom-table-container ">
      <table className="custom-table">
        <caption>
          Custom table with Pagination and Select how many items per page
        </caption>
        <thead>
          <tr>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {itemsDisplayed.map(({ id, city, country }) => (
            <tr key={id}>
              <td>{city}</td>
              <td>{country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        options={options}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        handleItemsPerPage={handleItemsPerPage}
        handleCurrentPage={handleCurrentPage}
      />
    </div>
  );
};

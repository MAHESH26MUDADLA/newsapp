import React from 'react';
import './searchForm.css';

interface SearchFormProps {
  active: boolean;
  formOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Searchform({ active, formOpen }: SearchFormProps) {
  return (
    <div className={`search-form-wrap ${active ? 'active' : ''}`}>
      <form action="#" className="search-form">
        <span className="search-icon">
          <input
            type="text"
            placeholder="Search"
            className="form-control"
          />
          <button
            type="button"
            className="btn"
            onClick={formOpen}
          >
            <span className="bi-x"></span>
          </button>
        </span>
      </form>
    </div>
  );
}

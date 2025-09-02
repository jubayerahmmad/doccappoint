import { Button } from "./ui/button";

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (currentPage: number) => void;
}

const Pagination = ({ currentPage, setCurrentPage, totalPages }: Props) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center space-x-2">
        <Button
          size="sm"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground px-4">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          size="sm"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;

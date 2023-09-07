import { Box, Button } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { useTodo } from "../../hooks/useTodo";
import { FilterValuesType } from "../../Types/Types";

type FilterPropType = {
  filterType: FilterValuesType,
  todoId: string
}

function FiltersTodo({ filterType, todoId }: FilterPropType) {
  const { handleSetFilterType } = useTodo()

  return (
    <Box
      display="flex"
      alignItems="center"
      columnGap={1}
      justifyContent="flex-end"
      pt={2}
    >
      {["all", "active", "completed"].map((filter) => (
        <Button
          key={filter}
          variant={filterType === filter ? "contained" : "outlined"}
          size="small"
          onClick={() => handleSetFilterType(filter as FilterValuesType, todoId)}
        >
          {filter}
        </Button>
      ))}
    </Box>
  );
}

export default FiltersTodo;

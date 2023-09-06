import { Box, Button } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { useTask } from "../../hooks/useTask";
import { FilterValuesType } from "../../Types/Types";

function FiltersTodo() {
  const { filterType } = useAppSelector(state => state.todos)
  const { handleSetFilterType } = useTask()

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
          onClick={() => handleSetFilterType(filter as FilterValuesType)}
        >
          {filter}
        </Button>
      ))}
    </Box>
  );
}

export default FiltersTodo;

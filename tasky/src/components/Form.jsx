import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const AddTaskForm = (props) => {

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
        }}
        onSubmit={props.submit}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            name="title"
            label="Task Title"
            slotProps={{ inputLabel: { shrink: true } }}
            onChange={(event) => props.change(event)}
          />
        </div>

        <TextField
        required
        name="deadline"
        label="Deadline"
        slotProps={{
        inputLabel: { shrink: true },
        htmlInput: {
            min: new Date().toLocaleDateString('en-CA')
        }
        }}
        type="date"
        onChange={(event) => props.change(event)} />

        {/* NEW: Priority Level */}
        <div>
          <TextField
            select
            required
            name="priority"
            label="Priority Level"
            defaultValue="Medium"
            slotProps={{ inputLabel: { shrink: true } }}
            onChange={(event) => props.change(event)}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </TextField>
        </div>

        <div>
          <TextField
            name="description"
            id="outlined-multiline-static"
            label="Task Details"
            slotProps={{ inputLabel: { shrink: true } }}
            multiline
            rows={4}
            onChange={(event) => props.change(event)}
          />
        </div>

        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              m: 1,
              p: 1,
              width: '95%'
            }}
          >
            Add Task
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default AddTaskForm;
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useRef } from "react";
const Form = ({ data, setData, setMessage, chatId }) => {
  const { text, author } = data;

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    if (chatId > 0 && text.length > 0) {
      setMessage(data);
    }
    setData({ text: "", author: "" });
    ref.current.focus();
  };

  return (
    <form
      onSubmit={submitForm}
      style={{
        display: "flex",
        gap: "15px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        id="standard-basic"
        label="Текст"
        variant="standard"
        value={text}
        onChange={(e) =>
          setData((pervstate) => ({ ...pervstate, text: e.target.value }))
        }
        ref={ref}
      />
      <TextField
        id="standard-basic"
        label="Имя"
        variant="standard"
        value={author}
        onChange={(e) =>
          setData((pervstate) => ({ ...pervstate, author: e.target.value }))
        }
      />

      <Button variant="contained" type="submit">
        Отправить
      </Button>
    </form>
  );
};

export default Form;

package data;

import java.io.Serializable;

public class ResponseMessageDTO implements Serializable {
    private String message;

    public ResponseMessageDTO() {
    }

    public ResponseMessageDTO(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

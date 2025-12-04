package services;

import java.math.BigDecimal;

public class ValidationService {
    public boolean validate(BigDecimal x, BigDecimal y, BigDecimal r, String type) {
        if ("form".equals(type) || "svg".equals(type)) {
            return (x.compareTo(BigDecimal.valueOf(5)) <= 0 && x.compareTo(BigDecimal.valueOf(-5)) >= 0) &&
                    (y.compareTo(BigDecimal.valueOf(3)) <= 0 && y.compareTo(BigDecimal.valueOf(-3)) >= 0) &&
                    (r.compareTo(BigDecimal.valueOf(5)) <= 0 && r.compareTo(BigDecimal.valueOf(-5)) >= 0);
        }
        return false;
    }
}

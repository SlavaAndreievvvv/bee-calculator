export const changeInputRange = () => {
  let rangeInput = $("#inputRange input");
  let priceInput = $("#formPrice input");
  let progress = $("#progress");
  let priceGap = 15;

  priceInput.on("input", function (e) {
    let minPrice = parseInt(priceInput.eq(0).val());
    let maxPrice = parseInt(priceInput.eq(1).val());

    if (
      maxPrice - minPrice >= priceGap &&
      maxPrice <= rangeInput.eq(1).attr("max")
    ) {
      if ($(e.target).hasClass("minPrice")) {
        rangeInput.eq(0).val(minPrice);
        progress.css(
          "left",
          (minPrice / rangeInput.eq(0).attr("max")) * 110 + "%"
        );
      } else {
        rangeInput.eq(1).val(maxPrice);
        progress.css(
          "right",
          100 - (maxPrice / rangeInput.eq(1).attr("max")) * 100 + "%"
        );
      }
    }
  });

  rangeInput.on("input", function (e) {
    let minVal = parseInt(rangeInput.eq(0).val());
    let maxVal = parseInt(rangeInput.eq(1).val());

    if (maxVal - minVal < priceGap) {
      if ($(e.target).hasClass("form-price-input-range-min")) {
        rangeInput.eq(0).val(maxVal - priceGap);
      } else {
        rangeInput.eq(1).val(minVal + priceGap);
      }
    } else {
      priceInput.eq(0).val(minVal);
      priceInput.eq(1).val(maxVal);
      progress.css("left", (minVal / rangeInput.eq(0).attr("max")) * 110 + "%");
      progress.css(
        "right",
        99.8 - (maxVal / rangeInput.eq(1).attr("max")) * 100 + "%"
      );
    }
  });
};

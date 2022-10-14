import React from "react";
import { Box, Stack } from "@mui/material";
import Tower from "../../components/Towers";

const index = ({ seats, onClick }) => {
    const topRow = seats.slice(0, 21);
    const leftRow = seats.slice(21, 32);
    const bottomRow = seats.slice(32, 53);
    const col1 = seats.slice(53, 60);
    const col2 = seats.slice(60, 67);
    const col3 = seats.slice(67, 74);
    const col4 = seats.slice(74, 81);
    const col5 = seats.slice(81, 88);
    const col6 = seats.slice(88, 95);
    const col7 = seats.slice(95, 102);
    const col8 = seats.slice(102, 109);
    const col9 = seats.slice(109, 116);

    return (
        <div className="view2">
            <Box sx={{ display: "inline-block" }}>
                <div className="view2-top">
                    <Tower
                        seats={topRow}
                        onClick={onClick}
                        variant="horizontal"
                        style={{
                            width: "70rem",
                            justifyContent: "space-between",
                            // p: 4,
                            display: "inline-flex",
                            padding: "2rem 4rem 0rem 5rem",
                            border: "solid 1px #000000",
                            borderBottom: "none",
                        }}
                    />
                </div>
                <Stack
                    flexDirection="row"
                    sx={{
                        // mt: "4rem",
                        border: "1px solid #000000",
                        // width: "90%",
                        borderTop: "0",
                        borderBottom: "0",
                    }}
                >
                    <Tower
                        seats={leftRow}
                        onClick={onClick}
                        style={{
                            height: "45rem",
                            p: "0rem 2rem",
                            justifyContent: "space-between",
                        }}
                    />

                    <Tower
                        seats={col1}
                        onClick={onClick}
                        style={{
                            height: "36rem",
                            p: "0rem 1rem 0rem 4rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                            borderRight: "1px solid #000000",
                        }}
                    />
                    <Tower
                        seats={col2}
                        onClick={onClick}
                        style={{
                            height: "36rem",
                            p: "0rem 4rem 0rem 1rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col3}
                        onClick={onClick}
                        style={{
                            height: "36rem",
                            p: "0rem 1rem 0rem 4rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                            borderRight: "1px solid #000000",
                        }}
                    />
                    <Tower
                        seats={col4}
                        onClick={onClick}
                        style={{
                            height: "36rem",
                            p: "0rem 4rem 0rem 1rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col5}
                        onClick={onClick}
                        style={{
                            height: "36rem",
                            p: "0rem 1rem 0rem 4rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                            borderRight: "1px solid #000000",
                        }}
                    />
                    <Tower
                        seats={col6}
                        onClick={onClick}
                        style={{
                            height: "36rem",
                            p: "0rem 4rem 0rem 1rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col7}
                        onClick={onClick}
                        style={{
                            height: "36rem",
                            p: "0rem 1rem 0rem 4rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                            borderRight: "1px solid #000000",
                        }}
                    />
                    <Tower
                        seats={col8}
                        onClick={onClick}
                        style={{
                            height: "36rem",
                            p: "0rem 4rem 0rem 1rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col9}
                        onClick={onClick}
                        style={{
                            height: "36rem",
                            p: "0rem 1rem 0rem 4rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                            borderRight: "1px solid #000000",
                        }}
                    />
                </Stack>
                <div className="view2-bottom">
                    <Tower
                        seats={bottomRow}
                        onClick={onClick}
                        variant="horizontal"
                        style={{
                            width: "75rem",
                            justifyContent: "space-between",
                            // p: 4,
                            display: "inline-flex",
                            padding: "1rem 2rem 2rem 2rem",
                            border: "solid 1px #000000",
                            borderTop: "none",
                        }}
                    />
                </div>
            </Box>
        </div>
    );
};

export default index;

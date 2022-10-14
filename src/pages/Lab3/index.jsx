import React from "react";
import { Box, Stack } from "@mui/material";
import Tower from "../../components/Towers";

const index = ({ seats, onClick }) => {
    const leftRow1 = seats.slice(0, 6);
    const leftRow2 = seats.slice(6, 10);
    // console.log("index -> leftRow1", leftRow1, leftRow2);

    const col1 = seats.slice(10, 21);
    const col2 = seats.slice(21, 32);
    const col3 = seats.slice(32, 43);
    const col4 = seats.slice(43, 54);
    const col5 = seats.slice(54, 65);
    const col6 = seats.slice(65, 76);
    const col7 = seats.slice(76, 87);

    return (
        <div className="view3">
            <Box sx={{ display: "inline-block" }}>
                <Stack
                    flexDirection="row"
                    sx={{
                        border: "1px solid #000000",
                        borderTop: "0",
                        borderBottom: "0",
                    }}
                >
                    <Stack
                        flexDirection="column"
                        sx={{
                            // border: "1px solid #000000",
                            borderTop: "0",
                            borderBottom: "0",
                            justifyContent: "space-between",
                        }}
                    >
                        <Tower
                            seats={leftRow1}
                            onClick={onClick}
                            style={{
                                height: "18rem",
                                p: "0rem 2rem",
                                justifyContent: "space-between",
                            }}
                        />
                        <Tower
                            seats={leftRow2}
                            onClick={onClick}
                            style={{
                                height: "12rem",
                                p: "0rem 2rem",
                                justifyContent: "space-between",
                            }}
                        />
                    </Stack>

                    <Tower
                        seats={col1}
                        onClick={onClick}
                        style={{
                            height: "32rem",
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
                            height: "32rem",
                            p: "0rem 4rem 0rem 1rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col3}
                        onClick={onClick}
                        style={{
                            height: "32rem",
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
                            height: "32rem",
                            p: "0rem 4rem 0rem 1rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col5}
                        onClick={onClick}
                        style={{
                            height: "32rem",
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
                            height: "32rem",
                            p: "0rem 4rem 0rem 1rem",
                            m: "5rem 0rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col7}
                        onClick={onClick}
                        style={{
                            height: "42rem",
                            p: "0rem 1rem 0rem 4rem",
                            m: "0rem 0rem",
                            justifyContent: "space-between",
                        }}
                    />
                </Stack>
            </Box>
        </div>
    );
};

export default index;

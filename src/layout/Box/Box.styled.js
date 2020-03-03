/* eslint-disable consistent-return */
import styled from "styled-components";

export const StyledBox = styled.div`
    margin: ${({ m }) => m};
    margin-top: ${({ mt, my }) => {
        if (mt) {
            return mt;
        }

        if (my) {
            return my;
        }
    }};
    margin-right: ${({ mr, mx }) => {
        if (mr) {
            return mr;
        }

        if (mx) {
            return mx;
        }
    }};
    margin-bottom: ${({ mb, my }) => {
        if (mb) {
            return mb;
        }

        if (my) {
            return my;
        }
    }};
    margin-left: ${({ ml, mx }) => {
        if (ml) {
            return ml;
        }

        if (mx) {
            return mx;
        }
    }};
    padding: ${({ p }) => p};
    padding-top: ${({ pt, py }) => {
        if (pt) {
            return pt;
        }

        if (py) {
            return py;
        }
    }};
    padding-right: ${({ pr, px }) => {
        if (pr) {
            return pr;
        }

        if (px) {
            return px;
        }
    }};
    padding-bottom: ${({ pb, py }) => {
        if (pb) {
            return pb;
        }

        if (py) {
            return py;
        }
    }};
    padding-left: ${({ pl, px }) => {
        if (pl) {
            return pl;
        }

        if (px) {
            return px;
        }
    }};
`;

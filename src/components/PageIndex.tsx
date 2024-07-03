import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAlleProtokolle } from "../backend/api";
import { ProtokollDescription } from "./ProtokollDescription";
import { ProtokollResource } from "../Resources";
import { LoadingIndicator } from "./LoadingIndicator";
import { AlleProtokolle } from "./AlleProtokolle";

export function PageIndex() {
    return (
        <div>
            <AlleProtokolle></AlleProtokolle>
        </div>
    );
}


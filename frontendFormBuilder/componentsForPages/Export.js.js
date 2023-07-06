
    import * as React from 'react';
    import { TopToolbar, SortButton, CreateButton, ExportButton } from 'react-admin';


    const ListActions = () => (
        <TopToolbar>
            <SortButton fields={['param1', 'param2', 'param3']} />
            <CreateButton />
            <ExportButton />
        </TopToolbar>
    );
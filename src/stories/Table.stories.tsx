import React, {useMemo} from 'react';
import {ComponentMeta} from '@storybook/react';
import Table from "../app/components/Table/Table";
import Icon from "@mdi/react";
import {mdiOpenInNew} from "@mdi/js";
import {Column, useTable} from "react-table";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Table',
    component: Table,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Table>;


type Post = {
    id: number
    title: string
    views: number
    author: {
        name: string
        avatar: string
    }
    conversions: {
        thousands: number
        percentage: number
    }
}

export function Default() {
    const data = useMemo<Post[]>(
        () => [
            {
                author: {
                    name: 'Daniel Bonifacio',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
                },
                id: 1,
                conversions: {
                    percentage: 64.35,
                    thousands: 607,
                },
                title: 'Como dobrei meu salário aprendendo somente React',
                views: 985415
            },
            {
                author: {
                    name: 'Daniel Bonifacio',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
                },
                id: 2,
                conversions: {
                    percentage: 64.35,
                    thousands: 607,
                },
                title: 'React.js vs. React Native: a REAL diferença entre os dois',
                views: 985415
            },
            {
                author: {
                    name: 'Daniel Bonifacio',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
                },
                id: 3,
                conversions: {
                    percentage: 95.35,
                    thousands: 845,
                },
                title: 'Como dobrei meu salário aprendendo somente React',
                views: 985415
            }
        ],
        []
    );

    const columns = useMemo<Column<Post>[]>(
        () => [
            {
                Header: '',
                accessor: 'id',
                Cell: () => (<Icon path={mdiOpenInNew} size={'14px'} color={'#09f'} /> )// accessor is the "key" in the data
            },
            {
                Header: () => <div style={{textAlign: 'left'}}>Artigo</div>,
                accessor: 'title', // accessor is the "key" in the data
                width: 320,
                Cell: (props) => <div style={{textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <img
                        width={24}
                        height={24}
                        src={props.row.original.author.avatar}
                        alt={props.row.original.author.name}
                    />
                    {props.value}
                </div>
            },
            {
                Header: <div style={{textAlign: 'right'}}>Views</div>,
                accessor: 'views',
                Cell: (props) => <div style={{
                    textAlign: 'right',
                    fontWeight: 700,
                    fontFamily: '"Roboto mono", monospace'
                }}>
                    {props.value.toLocaleString('pt-br')}
                </div>
            },
            {
                Header: <div style={{textAlign: 'left'}}>Conversões</div>,
                accessor: 'conversions',
                Cell: (props) => <div style={{
                    display: 'flex',
                    gap: '8px',
                    fontWeight: 700,
                    fontFamily: '"Roboto mono", monospace'
                }}>
                    <span>{props.value.thousands}k</span>
                    <span style={{color: '#09f'}}>{props.value.percentage}%</span>
                </div>
            },
            {
                id: Math.random().toString(),
                Header: <div style={{textAlign: 'right'}}>Ações</div>,
                Cell: () => <div style={{textAlign: 'right'}}>
                    todo: action
                </div>
            }
        ],
        []
    )

    const instance = useTable<Post>({data, columns})

    return <Table<Post> instance={instance}/>
}

export function WithoutData() {
    const data = useMemo<Post[]>(
        () => [

        ],
        []
    );

    const columns = useMemo<Column<Post>[]>(
        () => [
            {
                Header: '',
                accessor: 'id',
                Cell: () => (<Icon path={mdiOpenInNew} size={'14px'} color={'#09f'} /> )// accessor is the "key" in the data
            },
            {
                Header: 'Artigo',
                accessor: 'title', // accessor is the "key" in the data
                width: 320,
                Cell: (props) => <div style={{textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <img
                        width={24}
                        height={24}
                        src={props.row.original.author.avatar}
                        alt={props.row.original.author.name}
                    />
                    {props.value}
                </div>
            },
            {
                Header: 'View',
                accessor: 'views',
                Cell: (props) => <div style={{
                    textAlign: 'right',
                    fontWeight: 700,
                    fontFamily: '"Roboto mono", monospace'
                }}>
                    {props.value.toLocaleString('pt-br')}
                </div>
            },
            {
                Header: 'Conversões',
                accessor: 'conversions',
                Cell: (props) => <div style={{
                    display: 'flex',
                    gap: '8px',
                    fontWeight: 700,
                    fontFamily: '"Roboto mono", monospace'
                }}>
                    <span>{props.value.thousands}k</span>
                    <span style={{color: '#09f'}}>{props.value.percentage}%</span>
                </div>
            },
            {
                Header: 'Ações',
                Cell: () => <div style={{textAlign: 'right'}}>
                    todo: action
                </div>
            }
        ],
        []
    )

    const instance = useTable<Post>({data, columns})

    return <div style={{width: 500}}>
        <Table<Post> instance={instance}/>
    </div>
}